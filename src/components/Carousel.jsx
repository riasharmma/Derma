import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  const images = [
    {
      title: "San Diego",
      subtitle: "This is San Diego",
      img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  console.log(images[0].img);

  return (
    <div className="mx-auto h-[680px] max-w-7xl px-2 sm:px-6 lg:px-8 relative">
      fd
      <div
        style={{ backgroundImage: `url('${images[0].img}')` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>
      <div className="absolute">
        <ChevronLeftIcon className="w-10" />
      </div>
      <div className="absolute">
        <ChevronRightIcon className="w-10" />
      </div>
    </div>
  );
}

export default Carousel;
