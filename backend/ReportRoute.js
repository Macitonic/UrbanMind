import express, { Router } from "express";
import multer from "multer";
import path from "path";
import Report from "./models/ReportModel.js";

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

router.post("/", uploads.single("image"), async (req, res) => {
  try {
    const newReport = await Report.create({
      imageUrl: req.file.path,
      description: req.body.description || "",
      phoneNumber: req.body.phoneNumber,
    });

    res.status(201).json({
      message: "Report Saved",
      data: newReport,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }

  console.error(err);
  res.status(500).json({
    message: "An internal server error occured while saving the report",
  });
});

export default router;
