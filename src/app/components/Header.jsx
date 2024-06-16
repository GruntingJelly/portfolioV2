"use client";
import React from "react";
import Link from "next/link";
import { GoSun, GoMoon } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { GiDaemonSkull } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function Header() {
  const links = ["Home", "About", "Certicifates", "Contact"];
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="">
      <header className="text-dark-void dark:text-snow-white md:py-9 py-5">
        <div className="container mx-auto flex md:justify-between justify-around items-center md:w-2/3">
          <div className="block md:hidden">
            <button className="flex items-center md:px-3 py-2 ">
              <div className="space-y-2">
                <span className="block w-8 h-0.5  dark:bg-white bg-dark-void"></span>
                <span className="block w-8 h-0.5  dark:bg-white bg-dark-void"></span>
                <span className="block w-5 h-0.5  dark:bg-white bg-dark-void"></span>
              </div>
            </button>
          </div>
          <h1 className="text-xl font-bold lg:px-0 sm:px-4 font-Azonix tracking-[.5em] flex items-center justify-items-center">
            <GiDaemonSkull size={56} className="mx-2 hidden md:block" />

            <span className="text-liquid-lava">{"<"}</span>
            {"Ijara>"}
          </h1>
          <nav className="font-medium hidden md:block">
            <ul className="flex space-x-16">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-liquid-lava font-semibold tracking-widest"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="cursor-pointer text-lg "
            onClick={() => handleToggle()}
          >
            {darkMode ? (
              <GoSun
                size={24}
                className="hover:text-liquid-lava text-dark-void dark:text-snow-white"
              />
            ) : (
              <GoMoon size={24} className="hover:text-liquid-lava" />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
