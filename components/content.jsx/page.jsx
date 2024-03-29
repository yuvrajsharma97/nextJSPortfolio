import React from "react";
import About from "../contentPages/about";
import HomePage from "../contentPages/home";
import Project from "../contentPages/project";
import Skills from "../contentPages/skills";
import Contact from "../contentPages/contact";

const Content = () => {
  return (
    <div className="w-full">
      <HomePage />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Content;
