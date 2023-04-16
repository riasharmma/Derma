import React from "react";
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

const cards = [
  {
    heading: "Anesthesiology",
    description: "Anesthesiologists are medical doctors just like your primary care physician and surgeon. They specialize in anesthesia care, pain management, and critical care medicine, and have the necessary knowledge to understand and treat the entire human body.",
    img: 'https://i.imgur.com/E5jsG8N.jpg',
    id: 'gynaecology'
  },
  {
    heading: "Dermatology",
    description: "A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails. Whether it's rashes, wrinkles, psoriasis, or melanoma, no one understands your skin, hair, and nails better than a board-certified dermatologist.",
    img: 'https://i.imgur.com/8EH4iMy.jpg',
    id: 'gynaecology1'
  },
  {
    heading: "Ent",
    description: "Injuries, growths or deformities affecting the head and neck, including cancer. Difficulty swallowing. Chronic nasal congestion or frequent nose bleeds. Any other symptoms affecting your ears, nose, throat or balance can also be checked by an ENT specialist if you are worried or in need of a second opinion.",
    img: 'https://i.imgur.com/m7h9mNh.jpg',
    id: 'gynaecology2'
  },
  {
    heading: "General",
    description: "the branch of medicine that deals with the diagnosis and (nonsurgical) treatment of diseases of the internal organs (especially in adults) synonyms: internal medicine. type of: medical specialty, medicine.",
    img: 'https://i.imgur.com/EoibyW3.jpg',
    id: 'gynaecology4'
  },
  {
    heading: "General Surgery",
    description: "General surgery is a surgical specialty that focuses on alimentary canal and abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland.",
    img: 'https://i.imgur.com/dHoawo0.jpg',
    id: 'gynaecology5'
  },
  {
    heading: "Obstetrics",
    description: "a branch of medical science that deals with pregnancy, childbirth, and the postpartum period.",
    img: 'https://i.imgur.com/KwqTiMG.jpg',
    id: 'gynaecology6'
  },
  {
    heading: "Health Administration",
    description: "Health administration, healthcare administration, healthcare management or hospital management is the field relating to leadership, management, and administration of public health systems, health care systems, hospitals, and hospital networks in all the primary, secondary, and tertiary sectors.",
    img: 'https://i.imgur.com/IYDc61r.jpg',
    id: 'gynaecology7'
  },

  {
    heading: "Paeddiatrics",
    description: "Here are the biggest enterprise technology acquisitions of 2021 in reverse chronological order.",
    img: 'https://i.imgur.com/QA0cWjm.jpg',
    id: 'gynaecology9'
  },
  {
    heading: "Pathology",
    description: "Here are the biggest enterprise technology acquisitions of 2021 in reverse chronological order.",
    img: 'https://i.imgur.com/CzTvXJl.jpg',
    id: 'gynaecology10'
  },
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
