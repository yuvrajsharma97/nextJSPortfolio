"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaDownload, FaSpinner } from "react-icons/fa";
import Image from "next/image";
import anime from "animejs";
import "./contentPages.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const HomePage = () => {
  const socialMediaLinks = [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/yuvrajsharma97" },
    { platform: "GitHub", url: "https://github.com/imyuvi1234" },
    { platform: "Twitter", url: "https://twitter.com/i_m_yuvraj_s" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  // Function to simulate downloading
  const downloadResume = () => {
    setIsLoading(true);

    window.open("/resume/Yuvraj_Sharma_Resume.pdf", "_blank");
    // Simulate downloading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const textWrapper = useRef(null);

  useEffect(() => {
    const target = textWrapper.current;

    if (target) {
      target.innerHTML = target.textContent.replace(
        /\S/g,
        "<span class='letter' >$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".letter",
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1),
        })
        .add({
          targets: ".anime-text",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }

    return () => {
      anime.remove(target);
    };
  }, []);

  return (
    <div id="home" className="min-h-screen max-h-full w-full">
      <div className="flex flex-wrap w-full xs:pt-[6rem] md:pt-[10rem]">
        <div className="xs:w-full md:w-1/2 flex flex-col xs:order-last xs:pt-[3rem]">
          <div className="flex justify-center">
            <Image
              src="/assets/1609.jpg"
              alt="My Image"
              width="300"
              height="400"
              className=" rounded-md border-2 border-color2 p-2"
            />
          </div>
          <div className="flex justify-center pt-5">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color1 hover:text-color2 m-4 border-2 border-color2 rounded-full p-2">
                {link.platform === "LinkedIn" && <FaLinkedin size={30} />}
                {link.platform === "GitHub" && <FaGithub size={30} />}
                {link.platform === "Twitter" && <FaTwitter size={30} />}
              </a>
            ))}
          </div>
        </div>
        <div className="xs:w-full md:w-1/2">
          <h1 className="ml9 text-center mt-4">
            <span className="text-wrapper" ref={textWrapper}>
              <span>Hello</span>
            </span>
          </h1>
          <h1 className="text-center m-4">
            <span className="xs:text-3xl text-4xl  font-normal">
              My name is <span className="text-color2">Yuvraj Sharma</span>
            </span>
          </h1>
          <br />
          <p className="xs:text-xl text-xl text-center break-words text-color1 m-2">
            Front end developer with experience in <br /> Nextjs, ReactJs,
            TypeScript.
          </p>
          <div className="flex justify-around my-5">
            <button
              onClick={downloadResume}
              disabled={isLoading}
              className="bg-color2 hover:bg-color3 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" /> Downloading...
                </>
              ) : (
                <>
                  <FaDownload className="mr-2" /> Download Resume
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
