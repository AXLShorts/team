/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const mainDiv = document.querySelector(".hero");
    const parallaxDiv = document.querySelector(".parallax-div");

    const Xsensitivity = 100;
    const Ysensitivity = 100;

    mainDiv.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      parallaxDiv.style.transform = `
          translate(
              ${-x / Xsensitivity}%,
              ${-y / Ysensitivity}%
          )`;
      parallaxDiv.style.transition = "all 0.5s ease-out";
    });
  }, []);
  return (
    <div class="hero overflow-hidden flex flex-col gap-6 sm:h-[100vh] h-[50vh] sm:pt-0 pt-32 relative">
      <div class="h-[100vh] w-[100vw] absolute z-[-1] overflow-hidden">
        <div class="main-div">
          <div class="parallax-div">
            <img src="https://picsum.photos/200" alt="" />
            <img src="https://picsum.photos/300" alt="" />
            <img src="https://picsum.photos/400" alt="" />
            <img src="https://picsum.photos/500" alt="" />
            <img src="https://picsum.photos/600" alt="" />
            <img src="https://picsum.photos/700" alt="" />
            <img src="https://picsum.photos/800" alt="" />
            <img src="https://picsum.photos/900" alt="" />
          </div>
        </div>
      </div>
      <div className="grid-bg h-full flex flex-col gap-6 sm:pt-8 mx-auto">
        <div className="flex justify-center flex-wrap hero-main-content text-[6vw]">
          <h1 className="sm:pt-16 pt-8 font-extrabold text-white  mix-blend-difference">
            Pixel
          </h1>
          <h1 className="sm:pt-16 pt-8 font-extrabold collapse">I</h1>
          <h1 className="sm:pt-16 pt-8 font-extrabold bg-gradient-to-r from-purple-600 via-red-500 to-yellow-300 inline-block text-transparent bg-clip-text grd-text">
            Perfect
          </h1>
        </div>
        <p className="px-[5%] sm:text-xl text-md font-semibold text-gray-100 capitalize flex-wrap sm:w-3/4 sm:mx-auto mix-blend-difference">
          Elevating businesses through expertly crafted solutions, where
          innovation meets precision in every digital endeavor.
        </p>
        <a
          href="#"
          className=" mx-auto p-3 py-2 font-semibold bg-white text-black rounded-md border border-black hover:bg-black hover:text-white hover:border-black transition duration-200 ease-in-out"
        >
          Get Started
        </a>
        <div className="w-[75vw] h-[100px] mx-auto">
          <img
            src="Assets/Hero_pic.jpg"
            alt="Hero"
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
