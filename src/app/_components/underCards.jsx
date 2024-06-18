import React from "react";
import { deets } from "./constants";

function underCards() {
  return (
    <div className="my-10 md:flex md:justify-between md:flex-wrap bottom-deets">
      {deets.map((deet) => (
        <div className="md:w-[19rem] md:mb-0 mb-6 flex justify-center items-center flex-wrap text-dark-void dark:text-snow-white">
          <div className="mx-10 text-4xl font-bold text-liquid-lava text-center">
            {deet.Number} +
          </div>
          <div className="mx-10">{deet.text}</div>
        </div>
      ))}
    </div>
  );
}

export default underCards;
