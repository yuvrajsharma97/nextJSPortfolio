"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./contentPages.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SkillsCard = ({ image, description }) => {
  const getRandomHexColor = (min, max) => {
    const r = Math.floor(Math.random() * (max - min + 1) + min)
      .toString(16)
      .padStart(2, "0");
    const g = Math.floor(Math.random() * (max - min + 1) + min)
      .toString(16)
      .padStart(2, "0");
    const b = Math.floor(Math.random() * (max - min + 1) + min)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  };

  const bgColor = getRandomHexColor(220, 245);

  return (
    <div
      className="border border-color2 m-5 rounded-lg p-3 hover:shadow-lg transition duration-300 ease-in-out"
      style={{ backgroundColor: bgColor }}
      data-aos="flip-right">
      <Image
        src={image}
        alt={description}
        width={64} // Adjust the width according to your design
        height={64} // Adjust the height according to your design
        className="rounded-lg"
      />
    </div>
  );
};

const ExperiencesCard = ({ year, position, company, count }) => {
  return (
    <div
      className="mb-8 flex flex-col md:flex-row justify-around items-center w-full"
      data-aos="zoom-in">
      <div className="flex flex-row">
        <div className="z-20 w-6 h-6 rounded-full bg-color2 overflow-visible shadow">
          {" "}
          {count < 1 && (
            <div className="xs:hidden absolute h-full w-[0.1rem] bg-black top-[4.1rem] ms-[0.6rem]"></div>
          )}
        </div>
        <h1 className="md:absolute w-40 bg-color3 rounded-md px-2 py-1 text-sm leading-tight text-white transform xs:translate-x-2 md:translate-x-7">
          {year}
        </h1>
      </div>

      <div className="bg-color2 rounded-lg shadow-xl w-full md:w-6/12 px-6 py-4 mt-5 md:mt-0">
        <h3 className="mb-3 font-bold text-white text-xl">
          {position} at{" "}
          <span className="underline decoration-1 decoration-white italic">
            {company}
          </span>
        </h3>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsObject = [
    { image: "/assets/html.svg", description: "HTML" },
    { image: "/assets/css.svg", description: "CSS" },
    { image: "/assets/js.svg", description: "JavaScript" },
    { image: "/assets/react.svg", description: "React" },
    { image: "/assets/nextjs.svg", description: "Next Js" },
    { image: "/assets/tailwindcss.svg", description: "Tailwind CSS" },
    { image: "/assets/mui.svg", description: "Mui" },
    { image: "/assets/bootstrap.svg", description: "Bootstrap" },
    { image: "/assets/firebase.svg", description: "Firebase" },
    { image: "/assets/scss.svg", description: "Scss" },
    { image: "/assets/python.svg", description: "Python" },
  ];

  const experiences = [
    {
      year: "2023/09 - 2024/08",
      position: "MSc Computer Science",
      company: "University of Sussex",
      count: 0,
    },
    {
      year: "2022/09 - 2023/08",
      position: "Frontend Developer",
      company: "Getepay.in",
      count: 1,
    },
    // Add more experiences here...
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="skills" className="min-h-screen max-h-full w-full pt-5">
      <h1 className="text-center m-4">
        <span className="xs:text-3xl text-4xl  font-normal">
          <span className="text-color2">Skill</span> &{" "}
          <span className="text-color2">Experience</span>
        </span>
      </h1>

      <div className="flex flex-wrap">
        <div className="xs:w-full md:w-1/2 p-4 ">
          <h2 className="text-2xl text-center font-bold mb-4 underline underline-offset-2">
            Skills
          </h2>
          <div className="flex flex-wrap justify-around">
            {skillsObject.map((skill, index) => (
              <SkillsCard key={index} {...skill} />
            ))}
          </div>
        </div>
        <div className="xs:w-full md:w-1/2 p-4">
          <h2 className="text-2xl text-center font-bold mb-4 underline underline-offset-2 mb-[4rem]">
            Experience
          </h2>
          <div className="relative m-8">
            {experiences.map((experience, index) => (
              <ExperiencesCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
