import { useState } from "react";

function PostCampaign() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [titleError, setTitleError] = useState(null);
	const [descriptionError, setDescriptionError] = useState(null);

	function handleChange(value) {
		var val = value;

		if (val.length > 50) {
			setTitleError("Title should not be longer than 50 characters");
			console.log("name is too  long");
		} else {
			setTitleError(null);
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

	function handleSubmit(e) {
		e.preventDefault();

		if (selectedFile) {
			// Perform any actions with the selected image file, e.g., upload to a server
			console.log("Selected File:", selectedFile);
			window.alert(selectedFile.name);
		} else {
			// Handle the case when no valid image is selected
			alert("Please select a valid image file.");
		}
	}

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
					maxlength="200"
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
				<button className="join-btn" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default PostCampaign;
