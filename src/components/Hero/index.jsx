import React from "react";

function Hero() {
  return (
    <div className="hero bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] overflow-hidden flex flex-col gap-6 sm:h-[100vh] h-full">
      <div className="flex justify-center flex-wrap">
        <h1 className="sm:text-8xl text-4xl sm:pt-16 pt-8 font-extrabold">
          Pixel
        </h1>
        <h1 className="sm:text-8xl text-4xl sm:pt-16 pt-8 font-extrabold collapse">
          I
        </h1>
        <h1 className="sm:text-8xl text-4xl sm:pt-16 pt-8 font-extrabold bg-gradient-to-r from-purple-600 via-red-500 to-gray-900 inline-block text-transparent bg-clip-text grd-text">
          Perfect
        </h1>
      </div>
      <p className="px-[5%] sm:text-lg text-md font-semibold text-gray-700 capitalize flex-wrap sm:w-3/4 sm:mx-auto">
        Elevating businesses through expertly crafted solutions, where
        innovation meets precision in every digital endeavor.
      </p>
      <div className="flex gap-8 mx-auto">
        <a
          href="#"
          className="p-3 py-2 font-semibold bg-white text-black rounded-md border border-black hover:bg-black hover:text-white hover:border-black transition duration-200 ease-in-out"
        >
          Services
        </a>
        <a
          href="#"
          className="p-3 py-2 font-semibold bg-black text-white rounded-md border border-black hover:bg-purple-600 hover:text-white hover:border-black transition duration-200 ease-in-out"
        >
          Contact Us
        </a>
      </div>
      <div className="w-[75vw] h-[100px] mx-auto">
        <img
          src="Assets/Hero_pic.jpg"
          alt="Hero Image Here"
          className="object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Hero;
