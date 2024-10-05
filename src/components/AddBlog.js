import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    imageLink: "",
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.imageLink) {
      newErrors.imageLink = "Image Link is required.";
    }
    if (formData.title.length < 5 || formData.title.length > 150) {
      newErrors.title = "Title must be between 5 and 150 characters.";
    }
    if (!formData.title) {
      newErrors.title = "Title is required.";
    }
    if (
      formData.description.length < 15 ||
      formData.description.length > 1000
    ) {
      newErrors.description =
        "Description must be between 15 and 1000 characters.";
    }
    if (!formData.description) {
      newErrors.description = "Description is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://project-personal-blog-app.vercel.app/api/recipescardData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: formData.imageLink,
            title: formData.title,
            description: formData.description,
          }),
        });

        if (response.ok) {
          console.log("Data submitted successfully:", formData);
          navigate("/");
        } else {
          console.error("Failed to submit data:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Add Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="imageLink"
                className="block text-sm font-medium text-gray-700"
              >
                Image Link
              </label>
              <input
                type="url"
                id="imageLink"
                name="imageLink"
                required
                value={formData.imageLink}
                onChange={handleChange}
                className={`mt-1 block w-full border ${
                  errors.imageLink ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter image URL"
              />
              {errors.imageLink && (
                <p className="text-red-500 text-sm">{errors.imageLink}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className={`mt-1 block w-full border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter a title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className={`mt-1 block w-full border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter a description"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
