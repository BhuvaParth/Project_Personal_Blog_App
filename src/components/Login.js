import React from "react";

export default function login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div class="mb-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div class="mb-6">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>

          <p class="mt-4 text-center text-sm text-gray-600">
            Don't have an account?
            <a href="#" class="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
