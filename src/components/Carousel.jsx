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
    {
      title: "San Montina",
      subtitle: "This is San Montina",
      img: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      title: "Reve",
      subtitle: "Roxxx",
      img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
  ];

  const handleClickRight = () => {
    setCurrImg(images.length-1 > currImg ? currImg + 1 : 0);
  };

  const handleClickLeft = () => {
    setCurrImg(currImg > 0 ? currImg - 1 : images.length-1);
  };
  console.log(images[0].img);

  return (
    <div className="mx-auto h-[680px] max-w-7xl px-2 sm:px-6 lg:px-8 relative my-5">
      <div
        style={{ backgroundImage: `url('${images[currImg].img}')` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-1 bg-black/50 text-white cursor-pointer"
        onClick={handleClickLeft}
      >
        <ChevronLeftIcon className="w-7" />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-1 bg-black/50 text-white cursor-pointer"
      onClick={handleClickRight}>
        <ChevronRightIcon className="w-7" />
      </div>
    </div>
  );
}

export default Carousel;