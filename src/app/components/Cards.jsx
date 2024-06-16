import React from "react";

import { cards } from "./constants";

function Cards() {
  return (
    <div>
      <div className="my-10 md:flex md:justify-between h-auto md:flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="md:w-[19rem] md:mb-0 mb-2 flex justify-center items-center flex-wrap py-12 md:py-24 bg-slate-grey dark:bg-snow-white rounded shadow-xl dark:shadow-none dark:text-dark-void text-snow-white"
          >
            <div className="flex space-x-2">
              {card.icon.map((Icon) => Icon)}
            </div>
            <div className="mx-10 text-xl font-bold md:mt-16 mt-9 text-center">
              {card.title}
            </div>
            <div className="mx-10">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
