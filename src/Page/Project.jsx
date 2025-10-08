import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import Footer from "../Components/Footer";
import BackgroundAnimation from "./backgroundanimation";

function Project() {
  const projects = [
    {
      title: "Surflocal Properties Hub",
      desc: "Surf Local flips the traditional real estate model—putting both agents and consumers in control with transparent fees, unified tools, and seamless communication, all within a single platform.",
      link: "https://surflocalexchange.com/",
    },
    {
      title: "CameraCart - Online Camera Shop",
      desc: "CameraCart is a seamless online platform offering top-brand cameras and accessories with advanced search, user-friendly UI, and secure payment features.",
      link: "https://ecommeceweb.vercel.app/",
    },
    {
      title: "Trip-Tie",
      desc: "Trip-Tie is a responsive travel app where users can explore and book destinations with smooth UI transitions and animations.",
      link: "https://www.trip-tie.com/",
    },
    {
      title: "FoodiesApp - React Food Order App",
      desc: "FoodiesApp is a real-time food ordering platform built with React.js and Firebase, featuring live order tracking, cart management, and secure checkout.",
      link: "https://foodiesapp.com/",
    },
    {
      title: "Portfolify - Developer Portfolio",
      desc: "Portfolify is a customizable React-based portfolio template for developers to showcase projects, blogs, and social profiles in a sleek design.",
      link: "https://portfolify.dev/",
    },
    {
      title: "MyStore - E-Commerce React Site",
      desc: "MyStore is a full-stack React e-commerce solution with features like product listing, filtering, cart, checkout, and user authentication.",
      link: "https://mystore-reactapp.com/",
    },
  ];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="flex justify-center items-center font-['satoshi'] from-blue-700">
        <BackgroundAnimation />
        <div className="w-[95vw] min-h-[90vh] bg-zinc-900 shadow-[inset_0_0_50px_#1f2937] flex flex-col lg:flex-row rounded-md overflow-y-auto">
          {/* Title */}
          <h1 className="self-start whitespace-nowrap font-semibold text-3xl sm:text-4xl md:text-5xl ms-4 p-4 text-white">
            &lt;projects/&gt;
          </h1>

          {/* Project Cards */}
          <div className="flex flex-wrap justify-center md:justify-center lg:justify-start mt-4 md:mt-10 p-4 md:p-8 gap-6">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                className="w-[90%] sm:w-[45%] md:w-[40%] lg:w-[30%] bg-zinc-900 rounded-md bg-gradient-to-br from-red-300 p-5 sm:p-7 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* SVG ICON FULL RESTORED */}
                <svg
                  width="60"
                  height="60"
                  fill="#D0242A"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path d="M23.6731 41.5094C23.438 41.5095 23.2106 41.4256 23.0318 41.2728L16.6219 35.8148C16.5126 35.7218 16.4249 35.6062 16.3648 35.476C16.3046 35.3458 16.2734 35.204 16.2734 35.0606C16.2734 34.9171 16.3046 34.7754 16.3648 34.6452C16.4249 34.5149 16.5126 34.3993 16.6219 34.3063L23.0318 28.8483C23.2318 28.678 23.4912 28.594 23.7531 28.6149C24.0149 28.6358 24.2577 28.7599 24.4281 28.9598C24.7824 29.3767 24.7326 30.0018 24.3159 30.3561L18.7921 35.0603L24.3159 39.7643C24.4704 39.8957 24.5808 40.0714 24.6322 40.2676C24.6837 40.4637 24.6737 40.671 24.6036 40.8613C24.5335 41.0516 24.4066 41.2158 24.2402 41.3317C24.0738 41.4476 23.876 41.5097 23.6731 41.5094ZM36.3269 41.5094C36.0467 41.5094 35.7682 41.3911 35.5725 41.1606C35.4022 40.9606 35.3183 40.7012 35.3392 40.4394C35.3602 40.1775 35.4842 39.9347 35.6842 39.7643L41.208 35.0603L35.6842 30.3561C35.4914 30.1838 35.3736 29.9429 35.356 29.6848C35.3384 29.4268 35.4224 29.1722 35.5901 28.9753C35.7577 28.7784 35.9958 28.6549 36.2533 28.6311C36.5108 28.6074 36.7674 28.6853 36.9682 28.8482L43.3782 34.3062C43.4874 34.3992 43.5751 34.5148 43.6353 34.645C43.6955 34.7752 43.7266 34.917 43.7266 35.0604C43.7266 35.2039 43.6955 35.3456 43.6353 35.4759C43.5751 35.6061 43.4874 35.7217 43.3782 35.8147L36.9682 41.2727C36.7895 41.4255 36.5622 41.5094 36.3271 41.5094H36.3269Z" />
                  <path d="M53.3491 55.9367H6.65094C2.98387 55.9367 0 52.9534 0 49.2858V9.65094C0 5.98387 2.98387 3 6.65094 3H53.3491C57.0161 3 60 5.98387 60 9.65094V49.2858C60 52.9534 57.0161 55.9367 53.3491 55.9367ZM6.65094 4.98113C4.07618 4.98113 1.98113 7.07618 1.98113 9.65094V49.2858C1.98113 51.8605 4.07618 53.9556 6.65094 53.9556H53.3491C55.9238 53.9556 58.0189 51.8605 58.0189 49.2858V9.65094C58.0189 7.07618 55.9238 4.98113 53.3491 4.98113H6.65094Z" />
                  <path d="M59.0094 18.8618H0.990565C0.73075 18.8574 0.483062 18.7511 0.300878 18.5658C0.118694 18.3805 0.0166016 18.1311 0.0166016 17.8712C0.0166016 17.6114 0.118694 17.3619 0.300878 17.1766C0.483062 16.9913 0.73075 16.885 0.990565 16.8806H59.0094C59.2692 16.885 59.5169 16.9913 59.6991 17.1766C59.8813 17.3619 59.9834 17.6114 59.9834 17.8712C59.9834 18.1311 59.8813 18.3805 59.6991 18.5658C59.5169 18.7511 59.2692 18.8574 59.0094 18.8618Z" />
                </svg>

                {/* Title & Description */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold p-2">{proj.title}</h1>
                <p className="text-sm sm:text-base md:text-base">{proj.desc}</p>

                {/* Button */}
                <div
                  onClick={() => handleClick(proj.link)}
                  className="w-24 sm:w-28 mt-4 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 active:bg-red-800 transition-all duration-300 cursor-pointer"
                >
                  <Button />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
