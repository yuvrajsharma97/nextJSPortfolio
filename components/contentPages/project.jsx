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
            {title}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-around">
            <Link
              href={titleLink}
              target="_blank"
              className="border-2 border-color2 w-32 text-center shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 py-1 rounded-lg hover:bg-color2 hover:text-white">
              <span>Live</span>
            </Link>
            <Link
              href={link}
              target="_blank"
              className="border-2 border-color2 w-32 text-center shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 py-1 rounded-lg hover:bg-color2 hover:text-white">
              <span>Code</span>
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
      image: "/assets/csrImage.jpg",
      title: "Computer Science Roadmap",
      description:
        "A website that provides roadmaps for computer science students.",
      titleLink: "https://computer-science-roadmaps.vercel.app/",
      link: "https://github.com/yuvrajsharma97/Computer-Science-Roadmaps",
    },
    {
      image: "/assets/pomodoroImage.jpg",
      title: "Pomodor Productivity",
      description:
        "A pomodoro productivity app built using Next Js and Tailwind CSS.",
      titleLink: "https://pomodoro-next-js-chi.vercel.app/",
      link: "https://github.com/yuvrajsharma97/pomodoro-NextJS",
    },
    {
      image: "/assets/mefitImage.jpg",
      title: "MeFit",
      description:
        "A flexible workout tracker built for continuous improvement.",
      titleLink: "https://mefit-virid.vercel.app/",
      link: "https://github.com/yuvrajsharma97/mefit",
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
