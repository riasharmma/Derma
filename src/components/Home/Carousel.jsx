import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StopIcon,
} from "@heroicons/react/24/solid";

export const images = [
  {
    title: "San Diego",
    subtitle: "This is San Diego",
    img: "https://i.imgur.com/OJ1YMNV.png",
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

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  const handleClickRight = () => {
    setCurrImg(images.length - 1 > currImg ? currImg + 1 : 0);
  };

  const handleClickLeft = () => {
    setCurrImg(currImg > 0 ? currImg - 1 : images.length - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrImg(slideIndex);
  };


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
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-1 bg-black/50 text-white cursor-pointer"
        onClick={handleClickRight}
      >
        <ChevronRightIcon className="w-7" />
      </div>

      <div className="flex justify-center py-2">
        {images.map((n, slideIndex) => (
          <div className="cursor-pointer px-1" key={slideIndex} onClick={()=> goToSlide(slideIndex)}>
            <StopIcon className="w-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
