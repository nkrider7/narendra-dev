import React from "react";
import { skills } from "../../DB/skillsIcons";


export default function Skills() {
 

  return (
    <>
      <h1 className="text-white font-bold text-[2rem] mb-3 text-center hover:text-gray-300">
        Skills
      </h1>
      <div className="skills-card flex gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item  h-28 w-28 border rounded-lg flex flex-col justify-center items-center">
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className="">
              {skill.icon}
            </a>
            {/* <h className="skill-name text-white">{skill.name}</h> */}
          </div>
        ))}
      </div>
    </>
  );
}
