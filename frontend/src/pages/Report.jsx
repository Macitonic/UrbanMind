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
          required
        />
        <label htmlFor="description">What is the Issue</label>
        <input type="text" name="description" placeholder="A brief description of the issue"/>
        <label htmlFor="phone-number">Phone Number</label>
        <input type="tell" name="phoneNumber"  placeholder="Enter your phone number"/>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Report;
