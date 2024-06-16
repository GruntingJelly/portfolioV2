import React from "react";
import img from "../assets/portoflioPhoto-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import Cards from "./Cards";
import UnderCards from "./underCards";

import { HiArrowSmallDown } from "react-icons/hi2";

function Body() {
  return (
    <div className="container mx-auto w-2/3">
      <div className=" text-dark-void dark:text-snow-white h-max md:py-32">
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div className="animate__animated animate__zoomIn col-span-1  flex justify-center content-end">
            <Image
              src={img}
              alt="photo"
              className="sepia drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              priority
            ></Image>
          </div>
          <div className="col-span-1 flex items-center mt-9 md:mt-0">
            <div>
              <div className="animate__animated text-[1.7rem] md:text-3xl font-extrabold mb-4 text-liquid-lava animate__fadeInRight">
                <span className="text-dark-void dark:text-snow-white">
                  I'm a{" "}
                </span>
                Full Stack Web Developer
                <span className="text-dark-void dark:text-snow-white">.</span>
              </div>
              <div className="mb-4 animate__animated animate__fadeInDown animate__delay-1s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati mollitia necessitatibus delectus ratione. Asperiores
                rem vero non ratione exercitationem magnam cumque dignissimos
                voluptate amet ex! Officiis incidunt tempore asperiores!
                Perspiciatis?
              </div>
              <Link
                className="mb-4 text-liquid-lava hover:underline hover:text-decoration-text-liquid-lava flex items-center animate__animated animate__fadeInDown animate__delay-2s"
                href="#"
              >
                Read More. <HiArrowSmallDown />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-dark-void dark:text-snow-white">
        <div className="flex justify-center">
          <div className="pt-32 font-bold text-xl">Services</div>
        </div>
        <div className="py-4 font-extrabold flex justify-center text-4xl text-center">
          What I Am Great At
        </div>
        <div className="text-center mx-auto md:w-1/2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          maiores illum necessitatibus eius ducimus est, neque laborum optio
          quas accusantium cumque deleniti animi inventore voluptatem tenetur,
          quis ipsa minima asperiores.
        </div>
        <Cards />
        <UnderCards />
      </div>
    </div>
  );
}

export default Body;
