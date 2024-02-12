import { useState } from "react";

function PostAdvertisement() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
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
        <input type="file" id="file" name="file" />
        <br />
        <p class="text-info small">Note: Image must be in JPG or PNG format</p>
        <br />
        <button class="join-btn">Post</button>
      </form>
    </div>
  );
}

export default PostAdvertisement;
