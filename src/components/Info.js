import React from "react";
import { useNavigate } from "react-router-dom";

export default function Info({ item }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    localStorage.setItem('editItem', JSON.stringify(item));
    navigate('/editblog');
  };

  const handleDelete = () => {
    if (item && item.id) {
      fetch(`https://project-personal-blog-app.vercel.app/api/recipes/cardData/${item.id}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate('/');
      })
      .catch((error) => console.error('Error deleting item:', error));
    }
  };

  return (
    <>
      <div className="w-full bg-white p-6">
        <div className="mb-4 flex justify-end gap-3">
          <button
            className="bg-blue-700 text-white font-medium py-[6px] px-4 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-rose-600 text-white font-medium py-[6px] px-4 rounded-md shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <img
            src={item ? item.image : "https://via.placeholder.com/1200x500"}
            alt={item ? item.title : "Sample Image"}
            className="max-h-[500px] object-cover rounded-lg mb-4"/>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{item ? item.title : "Page Title"}</h2>
          <p className="text-xl text-gray-700">
            {item ? item.description : "This is the content text below the title. It can contain any information you'd like to display on the page."}
          </p>
        </div>
      </div>
    </>
  );
}
