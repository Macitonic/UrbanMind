import express, { Router } from "express";
import multer from "multer";
import path from "path";
import Report from "./models/Report.js";

const router = express.Router();

//image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  //make the new image name be unique

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const uploads = multer({ storage });

router.post("/", uploads.single("image"), (req, res) => {
  try {
    const newReport = Report.create({
      imageUrl: req.file.path,
      description: req.body.description || "",
    });

    res.status(201).json({
      message: "Report Saved",
      data: newReport,
    });
  } catch (err) {
    res.status(500).json({ message: "Error occured while saving the report" });
  }
});

export default router;
