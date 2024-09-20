"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_5jfgn12", // Enter your EmailJS service ID
        "template_53lpeka", // Enter your EmailJS template ID
        e.target,
        "4ciNb_E3sKaGw4sOj" // Enter your EmailJS user ID
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.success("Failed to send message. Please try again later.");
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="contact" className="py-[6rem] max-h-full w-full pt-5">
      <h1 className="text-center m-4">
        <span className="xs:text-3xl text-4xl  font-normal">
          Let&apos;s <span className="text-color2">Connect</span>
        </span>
      </h1>

      <div className="flex justify-around my-[5rem] flex-wrap">
        <a
          className="flex bg-color2 p-5 rounded-lg cursor-pointer my-2"
          href="mailto:sharma.yuvraj.00786@gmail.com"
          data-aos="zoom-in">
          <span className="rounded-full p-3 bg-white">
            <Image
              src={"/assets/email.svg"}
              alt="email"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </span>
          <span className="text-white m-auto mx-1">
            sharma.yuvraj.00786@gmail.com
          </span>
        </a>
        <a
          className="flex bg-color2 p-5 rounded-lg cursor-pointer my-2"
          href="tel:+447835840186"
          data-aos="zoom-in">
          <span className="rounded-full p-3 bg-white">
            <Image
              src={"/assets/phone.svg"}
              alt="phone"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </span>
          <span className="text-white m-auto mx-[4rem]">+44 7835840186</span>
        </a>
      </div>

      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="xs:w-10/12 md:w-7/12 mx-auto">
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-color2 hover:bg-color3 w-1/2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
