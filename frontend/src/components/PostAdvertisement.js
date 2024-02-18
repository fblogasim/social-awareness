import { useState } from "react";
import axios from "axios";

function PostAdvertisement() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState(null);

  function handleTitleChange(value) {
    var title = value; // get the value of the input
    if (title.length > 10) {
      setTitleError("Title must be less than 10 characters");
    } else {
      setTitleError("");
      setTitle(title);
    }
  }
  function handleDescriptionChange(value) {
    var description = value;
    if (description.length > 200) {
      setDescriptionError("Description must be less than 200 characters");
    } else {
      setDescriptionError("");
      setDescription(description);
    }
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("description", description);

      const response = await axios.post(
        "http://localhost:8080/postAdvertisement",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Image uploaded:", response.data);
      setUploadStatus("uploaded");
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("notUploaded");
    }
  };

  return (
    <div class="card">
      <h1>Post Advertisement</h1>
      <form id="PostAdvertisement">
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <p class="text-danger small">{titleError}</p>

        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          onChange={(e) => handleDescriptionChange(e.target.value)}
        />
        <p class="text-danger small">{descriptionError}</p>
        <label htmlFor="Image">Upload Image</label>
        <br />
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br />
        <p class="text-info small">Note: Image must be in JPG or PNG format</p>
        <br />
        <button class="join-btn" onClick={submitForm}>
          Post
        </button>
        {uploadStatus === "uploaded" ? (
          <p className="text-success">Advertisement Posted</p>
        ) : uploadStatus === "notUploaded" ? (
          <p className="text-danger">Not uploaded</p>
        ) : null}
      </form>
    </div>
  );
}

export default PostAdvertisement;
