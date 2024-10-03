import React from "react";
import { useNavigate } from "react-router-dom";

export default function Info() {

  const navigation = useNavigate();

  const hendelEdit = () => {
    navigation('/editblog');
  }

  return (
    <>
      <div class="w-full bg-white p-6">
        <div className="mb-2 flex justify-end gap-3">
          <button
            className="bg-blue-700 text-white font-medium py-[6px] px-4 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            onClick={hendelEdit}
          >
            Edit
          </button>
          <button
            className="bg-rose-600 text-white font-medium py-[6px] px-4 rounded-md shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
          >
            Delete
          </button>
        </div>
        <div class="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Sample Image"
            class="max-h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="">
          <h2 class="text-xl font-bold mb-2">Page Title</h2>
          <p class="text-gray-700">
            This is the content text below the title. It can contain any
            information you'd like to display on the page.
          </p>
        </div>
      </div>
    </>
  );
}
