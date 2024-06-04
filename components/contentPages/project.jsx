"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ image, title, titleLink, description, link }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="m-[2rem] drop-shadow-2xl" data-aos="zoom-in">
      <div class="max-w-sm bg-[#fcfdfe] rounded-lg">
        <div className="p-3">
          <Image
            src={image}
            alt="hero"
            width={500}
            height={500}
            className="rounded-lg shadow-sm shadow-indigo-500/40"
          />
        </div>

        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold text-center text-color3">
            <a href={titleLink} target="_blank">
              {title}
            </a>
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-center">
            <Link
              href={link}
              target="_blank"
              className="border-2 border-color2 px-3 py-1 rounded-lg hover:bg-color2 hover:text-white">
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const porjectsObject = [
    {
      image: "/assets/portflioImage.jpg",
      title: "Next Js Portfolio",
      description: "A portfolio website built using Next Js and Tailwind CSS.",
      titleLink: "https://yuvrajsharmanextjsportfolio.vercel.app",
      link: "https://github.com/yuvrajsharma97/nextJSPortfolio",
    },
    {
      image: "/assets/pomodoroImage.jpg",
      title: "Pomodor Productivity App",
      description:
        "A pomodoro productivity app built using Next Js and Tailwind CSS.",
      titleLink: "https://pomodoro-next-js-chi.vercel.app/",
      link: "https://github.com/yuvrajsharma97/pomodoro-NextJS",
    },
    {
      image: "/assets/projectmanageImage.jpg",
      title: "Project Management App",
      description: "A portfolio website built using Next Js and Tailwind CSS.",
      titleLink: "https://github.com/yuvrajsharma97/Project-Management",
      link: "https://github.com/yuvrajsharma97/Project-Management",
    },
  ];

  return (
    <div id="projects" className="min-h-screen max-h-full w-full pt-5">
      <h1 className="text-center m-4">
        <span className="xs:text-3xl text-4xl  font-normal">
          Some of my{" "}
          <span className="text-color2">Recent Project Endeavors</span>
        </span>
      </h1>
      <div className="flex flex-wrap justify-around pt-[3rem]">
        {porjectsObject.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
