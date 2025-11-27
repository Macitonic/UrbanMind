import React from "react";

const report = () => {
  return (
    <div>
      <p>PowerReport</p>
      <h2>Report an Electricity Issue</h2>

      <form action="upload.jsx" method="post" encType="multipart/form-data">
      <label for="imageUpload">Select an image to upload:</label>
      <input type="file" id="imageUpload" name="image" accept="image/*" />
      <input type="submit" value="Upload Image" />
      </form>
    </div>
  );
};

export default report;
