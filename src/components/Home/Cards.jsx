import React from "react";
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

const cards = [
  {
    heading:"Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 in reverse chronological order.",
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    id: 'gynaecology'
  },
  {
    heading:"Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 in reverse chronological order.",
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    id: 'gynaecology1'
  },
  {
    heading:"Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 in reverse chronological order.",
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    id: 'gynaecology2'
  }
]
const Cards = () => {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl mb-6 text-gray-900">
        Consult any doctor you wish
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
       {cards.map((n)=><div key={n.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg w-full aspect-square object-cover"
            src={n.img}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {n.heading}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {n.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
                  <ArrowSmallRightIcon className="w-5"/>
            </a>
          </div>
        </div>)}
        
      </div>
    </div>
  );
};

export default Cards;
