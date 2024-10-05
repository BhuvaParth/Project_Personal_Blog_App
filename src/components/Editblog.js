import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Editblog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "", 
    image: "",
    title: "",
    description: ""
  });

  useEffect(() => {
    const itemData = JSON.parse(localStorage.getItem('editItem'));
    if (itemData) {
      setFormData({
        id: itemData.id,
        image: itemData.image,
        title: itemData.title,
        description: itemData.description
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`https://project-personal-blog-app.vercel.app/api/blogs/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: formData.id,
        image: formData.image,
        title: formData.title,
        description: formData.description
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      localStorage.removeItem('editItem'); 
      navigate('/');
    })
    .catch((error) => console.error('Error updating item:', error));
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Edit Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image Link
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a title"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

