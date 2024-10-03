import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/cardData")
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

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
            <div key={index} className="w-full bg-transparent border-b border-gray-300 mt-4 p-4">
            <div className="flex">
              <img
                className="w-6/6 object-cover mr-4"
                src={item.image}
                alt={`Image for ${item.title}`}
              />
              <div className="p-4 w-full">
                <h2 className="text-lg font-bold text-black">{item.title}</h2>
                <p className="text-black">{item.content}</p>
                <Link
                  to="about"
                  className="text-violet-600 hover:underline mt-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
