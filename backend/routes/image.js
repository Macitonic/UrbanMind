// routes/image.js (Updated with Multer)
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Configure storage (e.g., save files to an 'uploads' folder)
const upload = multer({ dest: "uploads/" });

// Route to handle file submission
// We use upload.single('issueImage') because 'issueImage' is the name
// of the file input field in our HTML form.
router.post("/submit", upload.single("issueImage"), (req, res) => {
  // req.file contains information about the uploaded file
  const fileInfo = req.file;

  // req.body contains the text fields from the form (e.g., description)
  const textData = req.body;

  console.log("Received File Info:", fileInfo);
  console.log("Received Text Data:", textData);

  // **TO DO:**
  // 1. Move the file from 'uploads/' to permanent storage (S3, Cloudinary, etc.)
  // 2. Save file path and textData to MongoDB.

  res.status(201).json({
    message: "Image and data received successfully!",
    // Send back what the server received for testing
    file: fileInfo,
    data: textData,
  });
});
router.get("/all", (req, res) => {
  const mockData = [
    {
      id: 1,
      type: "Air Quality",
      value: 45,
      unit: "AQI",
      timestamp: Date.now(),
    },
  ];

  res.status(200).json(mockData);
});

module.exports = router;
