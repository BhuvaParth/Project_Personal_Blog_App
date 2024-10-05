import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://project-personal-blog-app.vercel.app/api/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.cardData)) {
          setData(data.cardData);
        } else if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const truncate = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-transparent border-b border-gray-300 mt-4 p-4"
          >
            <div className="flex">
              <img
                className="max-w-[200px] object-cover mr-4"
                src={item.image}
                alt={`Image for ${item.title}`}
              />
              <div className="p-4 w-full">
                <h2 className="text-2xl font-bold text-black">
                  {truncate(item.title, 80)}
                </h2>
                <p className="text-lg text-black">{truncate(item.description, 250)}</p>
                <Link
                  to="/about"
                  state={{ item }}
                  className="text-xl text-violet-600 hover:underline mt-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[600px]">
          <p className="text-2xl font-bold">No Data Found</p>
        </div>
      )}
    </>
  );
}
