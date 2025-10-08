import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaStar } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-transparent ">
      <div className="max-w-screen-xl mx-auto py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 px-4 sm:px-6 md:px-8">
        
        {/* Left Section */}
        <div className="basis-1/2 text-center lg:text-left">
          <h1 className="text-7xl sm:text-7xl md:text-9xl lg:text-[5rem] font-semibold leading-none tracking-tight text-white">
            Monu...
          </h1>
        </div>

        {/* Right Section */}
        <div className="basis-1/2 flex flex-col sm:flex-row gap-10 sm:gap-6 lg:gap-1">
          
          {/* Social Links */}
          <div className="basis-1/3">
            <h4 className="mb-6 sm:mb-10 text-zinc-300 capitalize text-lg sm:text-xl">Socials</h4>
            <div className="flex flex-col gap-3 text-base sm:text-lg">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-white cursor-pointer transition duration-300"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-white cursor-pointer transition duration-300"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-white cursor-pointer transition duration-300"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-white cursor-pointer transition duration-300"
              >
                <FaFacebook /> Facebook
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="basis-1/3 sm:ms-6 md:ms-10">
            <h4 className="mb-6 sm:mb-10 text-zinc-300 capitalize text-lg sm:text-xl">
              Frontend Technologies
            </h4>
            {["HTML", "CSS", "JAVASCRIPT", "REACT.JS", "BOOTSTRAP", "Tailwind"].map((item, index) => (
              <a
                key={index}
                className="block mt-2 sm:mt-3 text-zinc-600 capitalize hover:text-white cursor-pointer transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Rating Section */}
          <div className="sm:ms-4">
            <h4 className="mb-6 sm:mb-10 text-zinc-300 capitalize text-lg sm:text-xl">Rating</h4>
            <div className="flex gap-1 text-yellow-400 text-lg sm:text-xl">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
