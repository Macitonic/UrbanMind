import "./form.css";

const form = () => {
  return (
    <div>
      <form action="upload.jsx" method="post" encType="multipart/form-data">
        <div className="imageUpload">
          <label for="imageUpload">Select an image to upload:</label>
          <input type="file" id="imageUpload" name="image" accept="image/*" />
        </div>

        <input type="submit" value="Upload Image" />
      </form>
    </div>
  );
};

export default form;
