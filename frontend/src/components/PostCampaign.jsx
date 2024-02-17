import { useState } from "react";
import axios from "axios";

function PostCampaign() {
	const [selectedFile, setSelectedFile] = useState("");
	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState("");
	const [description, setDescription] = useState("");
	const [descriptionError, setDescriptionError] = useState("");
	const [image, setImage] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [uploadStatus, setUploadStatus] = useState(null);

	function handleChange(value) {
		var val = value;

		if (val.length > 50) {
			setTitleError("Title should not be longer than 50 characters");
			console.log("name is too  long");
		} else {
			setTitleError(null);
			setTitle(val);
		}
	}

	function handleTextChange(value) {
		var val = value;

		if (val.length > 300) {
			setDescriptionError(
				"description should not be longer than 300 characters",
			);
			console.log("description is too  long");
		} else {
			setDescriptionError(null);
			setDescription(val);
		}
	}

	function handleFileChange(value) {
		const file = value;

		if (file && file.type.startsWith("image/")) {
			// If the selected file is an image, set it to state
			setSelectedFile(file);
		} else {
			// If the selected file is not an image, you can handle it accordingly (e.g., show an error message)
			setSelectedFile(null);
			alert("Please select a valid image file.");
		}
	}

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("title", title);
			formData.append("image", selectedFile);
			formData.append("description", description);
			formData.append("status", "pending");

			const response = await axios.post(
				"http://localhost:8080/postCampaign",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);

			console.log("Campaign uploaded:", response.data);
			setUploadStatus("uploaded");
		} catch (error) {
			console.error("Error uploading image:", error);
			setUploadStatus("notUploaded");
		}
	};

	return (
		<div className="card">
			<h2>Post Campaign</h2>
			<form>
				<label htmlFor="title">Title</label>
				<br />
				<input
					name="title"
					type="text"
					onChange={(e) => handleChange(e.target.value)}
				/>
				<p className="text-danger small">{titleError}</p>
				<label htmlFor="Description">Description</label>
				<br />
				<textarea
					name="Description"
					rows="4"
					cols="50"
					maxLength="200"
					onChange={(e) => handleTextChange(e.target.value)}
				></textarea>
				<p className="text-danger small">{descriptionError}</p>
				<label htmlFor="featured_image">Upload Image</label>
				<br />
				<input
					name="featured_image"
					type="file"
					accept="image/*"
					onChange={(e) => handleFileChange(e.target.files[0])}
				/>
				<br />
				<br />
				<button className="join-btn" onClick={submitForm}>
					Submit
				</button>
				{uploadStatus === "uploaded" ? (
					<p className="text-success">Campaign Posted</p>
				) : uploadStatus === "notUploaded" ? (
					<p className="text-danger">Not uploaded</p>
				) : null}
			</form>
		</div>
	);
}

export default PostCampaign;
