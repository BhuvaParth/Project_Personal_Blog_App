import React from "react";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between">
          <Cards />
        </div>
      </div>
    </>
  );
}
