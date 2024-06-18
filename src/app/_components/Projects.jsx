import React from "react";
import { projects } from "./constants";

function Projects() {
  return (
    <div className="flex justify-center">
      <ul className="flex w-full justify-between md:flex-row flex-col">
        {projects.map((project, index) => (
          <li key={index} className="h-12 w-auto ">
            <button
              id={project.id}
              className="uppercase inline-block p-4 border-b-2 border-transparent rounded-t-lg dark:text-snow-white dark:hover:text-liquid-lava hover:border-dark-void dark:hover:border-liquid-lava active"
              aria-current="page"
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
