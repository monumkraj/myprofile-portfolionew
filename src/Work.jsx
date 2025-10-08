import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaHandsClapping } from "react-icons/fa6";
import BackgroundAnimation from "./Page/backgroundanimation";

function Work() {
  const images = [
    {
      url: "https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png",
      top: "45%",
      left: "58%",
    },
    {
      url: "https://img.freepik.com/free-photo/3d-rendering-cartoon-like-man-working-computer_23-2150797572.jpg",
      top: "49%",
      left: "45%",
    },
    {
      url: "https://media.istockphoto.com/id/1413761223/photo/young-asian-woman-watching-hologram-screens-business-technology.jpg",
      top: "51%",
      left: "59%",
    },
    {
      url: "https://media.istockphoto.com/id/966826672/photo/futuristic-graphical-user-interface-concept.jpg",
      top: "63%",
      left: "57%",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3wgqIGwx0SAetS3NlwrsWPhrzxuGSmeDHA&s",
      top: "65%",
      left: "45%",
    },
    {
      url: "https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-related-profession_23-2151419548.jpg",
      top: "70%",
      left: "55%",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalImages = images.length;

      // Divide scroll height into equal sections for each image
      const sectionHeight = (document.body.scrollHeight - windowHeight) / totalImages;

      // Determine which image should be visible
      const index = Math.min(totalImages - 1, Math.floor(scrollY / sectionHeight));
      setVisibleIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div className="text-vidio  relative w-full h-screen overflow-hidden">
      <BackgroundAnimation/>
      {/* Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.pixabay.com/video/2021/10/06/91069-628462649_large.mp4"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* Foreground Content */}
      <div className="full-div relative z-10 max-w-screen-xl mx-auto text-left h-full flex items-center justify-start px-4 sm:px-6 md:px-8">
        <div className=" text-high absolute top-20 flex flex-col items-start space-y-6 text-gray-800 -translate-y-[-60%]">
          <h3 className="h1-text   text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Hi
          </h3>

          <h3 className=" flex absolute items-center text-2xl sm:text-3xl md:text-4xl text-yellow-500">
            <FaHandsClapping className=" fa-img ms-16 sm:ms-20 md:ms-24 animate-bounce" />
          </h3>

          <h3 className="text-set text-3xl sm:text-5xl md:text-7xl text-white font-semibold leading-tight">
            I Am
            <span className="fire-text ms-4 sm:ms-8 md:ms-12">Monu Kumar</span>
            <br />
            <span className="text-white">I’m passionate about</span>
          </h3>

          <span className="text-set    text-lg sm:text-3xl md:text-5xl lg:text-7xl mb-12 font-medium text-blue-300">
            <TypeAnimation className="animation-text"
              style={{ fontFamily: "sans-serif", fontWeight: "700" }}
              sequence={["Full-Stack-Developer",1000,"Mern-Stack-Developer",1000,"Frontend Developer", 1000, "Web Developer", 1000, "React.js Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>

        {/* Scroll-based Floating Images */}
        <div className=" images-container relative w-full h-full">
  {images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={`image-${index}`}
            className={`absolute ms-52 mt-5 w-40 sm:w-56 md:w-72 lg:w-96 rounded-lg transition-all duration-700 ease-out
              ${index <= visibleIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
            `}
            style={{
              top: img.top,
              left: img.left,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        </div>
      
      </div>
    </div>
  );
}

export default Work;
