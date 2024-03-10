/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowTopbar(!showTopbar);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 z-10 w-full">
        {showTopbar && (
          <div className=" flex justify-between bg-black bg-opacity-50 backdrop-blur-md items-center overflow-hidden p-5">
            <div className="flex justify-center gap-4 relative">
              <img
                src="Assets/Logo_up.png"
                alt="Logo Here"
                height="50vw"
                width="50vw"
              />
              <h1 className="text-white text-md md:text-2xl font-bold absolute left-12 bottom-0 text-nowrap">
                ixel Perfect
              </h1>
            </div>
            <div className="hidden sm:flex sm:gap-8">
              <a
                href="#about-section"
                className="font-semibold leading-6 text-base text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                About Us
              </a>

              <a
                href="#services-section"
                className="text-base font-semibold leading-6 text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Services
              </a>
              <a
                href="#team-section"
                className="text-base font-semibold leading-6 text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Team
              </a>
              <a
                href="#projects-section"
                className="text-base font-semibold leading-6 text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </div>
            <a
              href="#contact-section"
              className="ml-auto sm:ml-0 bg-white text-black p-3 py-2 text-nowrap font-semibold rounded-md border border-black hover:bg-black hover:text-white hover:border hover:border-black transition duration-200 ease-in-out mr-5 sm:mr-0"
            >
              Contact Us
            </a>
            <a href="#" className="sm:hidden">
              <Menu size="32" color="white" onClick={toggleSidebar} />
            </a>
          </div>
        )}
        {showSidebar && (
          <div className="h-[full] w-[100vw] bg-black z-50">
            <div className="flex justify-between px-3">
              <img
                src="Assets/Logo_down.png"
                alt="Logo Here"
                height="100px"
                width="100px"
                className="pl-2"
              />
              <div className="flex gap-1.5">
                <a
                  href="#"
                  className="ml-auto sm:ml-0 bg-black text-white py-2 my-auto px-3 text-nowrap font-semibold rounded-md border hover:bg-white hover:text-black hover:border transition duration-200 ease-in-out mr-5 sm:mr-0"
                >
                  Contact Us
                </a>
                <a href="#" className="mt-5 mr-3 mb-5 py-5">
                  <X size="24" color="white" onClick={toggleSidebar} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="my-auto w-full font-semibold text-white p-3 shadow-md hover:text-gray-300 transition duration-300 ease-in-out"
              >
                About Us
              </a>
              <a
                href="#"
                className="my-auto w-full font-semibold text-white p-3 shadow-md hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Team
              </a>
              <a
                href="#"
                className="my-auto w-full font-semibold text-white p-3 shadow-md hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Services
              </a>
              <a
                href="#"
                className="my-auto w-full font-semibold text-white p-3 shadow-md hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
