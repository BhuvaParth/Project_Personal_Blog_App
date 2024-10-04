import React from "react";
import Info from "../components/Info";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Info item={item} />
        </div>
      </div>
    </>
  );
}

