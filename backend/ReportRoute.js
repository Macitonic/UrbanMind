import express, { Router } from "express";
import multer from "multer";
import path from "path";

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
  console.log("filename: ", req.file);

  if (req.file) {
    res.status(200).json({
      message: "file uploaded successfully",
      filePath: req.file.path,
    });
  } else {
    res.status(400).json({
      message: "file upload failed",
    });
  }
});

export default router;