import React from "react";

const Report = () => {
  return (
    <div>
      <p>PowerReport</p>
      <h2>Report an Electricity Issue</h2>

      <form
        action="http://localhost:5000/report"
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="uploads">Upload a Photo</label>
        <input
          type="file"
          multiple={false}
          accept="image/jpeg, image/png, image/jpg"
          name="image"
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Report;
