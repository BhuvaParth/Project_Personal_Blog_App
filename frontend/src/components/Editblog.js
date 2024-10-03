import React from "react";

export default function Editblog() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 class="text-2xl font-bold text-center mb-6">Edit Blog</h2>
          <form>
            <div class="mb-4">
              <label
                for="imageLink"
                class="block text-sm font-medium text-gray-700"
              >
                Image Link
              </label>
              <input
                type="url"
                id="imageLink"
                name="imageLink"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            <div class="mb-4">
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a title"
              />
            </div>

            <div class="mb-6">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="4"
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a description"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
