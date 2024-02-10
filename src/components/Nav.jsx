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
    <div>
      {showTopbar && (
        <div className="absolute w-full h-[15vh] flex justify-between bg-white bg-opacity-70 backdrop-blur-md items-center top-0 px-5 overflow-hidden">
          <img
            src="Assets/Logo_down.png"
            alt="Logo Here"
            height="100px"
            width="100px"
          />
          <div className="hidden sm:flex sm:gap-8">
            <a
              href="#"
              className="font-semibold leading-6 text-base text-gray-900 hover:text-gray-500 transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-500 transition duration-300 ease-in-out"
            >
              Team
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-500 transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-500 transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </div>
          <a
            href="#"
            className="ml-auto sm:ml-0 bg-black text-white p-3 py-2 text-nowrap font-semibold rounded-md border border-black hover:bg-white hover:text-black hover:border hover:border-black transition duration-200 ease-in-out mr-5 sm:mr-0"
          >
            Contact Us
          </a>
          <a href="#" className="sm:hidden">
            <Menu size="32" onClick={toggleSidebar} />
          </a>
        </div>
      )}
      {showSidebar && (
        <div className="h-[full] w-[100vw] bg-white z-50">
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
                className="ml-auto sm:ml-0 bg-black text-white py-2 my-auto px-3 text-nowrap font-semibold rounded-md border border-black hover:bg-white hover:text-black hover:border hover:border-black transition duration-200 ease-in-out mr-5 sm:mr-0"
              >
                Contact Us
              </a>
              <a href="#" className="mt-5 mr-3 mb-5 py-5">
                <X size="24" onClick={toggleSidebar} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="my-auto w-full border-b border-[#afafaf] p-3 shadow-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className="my-auto w-full border-b border-[#afafaf] p-3 shadow-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            >
              Team
            </a>
            <a
              href="#"
              className="my-auto w-full border-b border-[#afafaf] p-3 shadow-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="my-auto w-full border-b border-[#afafaf] p-3 shadow-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
