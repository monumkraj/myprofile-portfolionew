import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BackgroundAnimation from "../Page/backgroundanimation";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

function Certificate() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }).from(
      rightRef.current,
      {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8"
    );
  }, []);

  const certificates = [
    {
      img: "src/img/Screenshot 2025-10-06 at 16-21-55 KOD1N04ZU-Monu-1.pdf.png",
      title: "Java Full Stack Certificate",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <BackgroundAnimation />

      <div
        ref={sectionRef}
        className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-8 md:p-16"
      >
        {/* LEFT SIDE - Description */}
        <div
          ref={leftRef}
          className="md:w-1/2 w-full space-y-5 text-justify px-4 md:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
            Java Full Stack Web Development Training
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            I have successfully completed a comprehensive{" "}
            <span className="text-green-400 font-semibold">
              Java Full Stack Web Development
            </span>{" "}
            training and internship where I gained strong knowledge in both
            front-end and back-end technologies such as HTML, CSS, JavaScript,
            React.js, Bootstrap, Tailwind CSS, Core Java, Spring Boot, Node.js,
            Express.js, and MySQL.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            During my course, I worked on multiple projects like e-commerce and
            portfolio websites, focusing on responsive design, UI/UX, and API
            integration. This training helped me gain practical experience in
            full-stack architecture and scalable web app development.
          </p>
        </div>

        {/* RIGHT SIDE - Carousel Certificates */}
        <div
          ref={rightRef}
          className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center items-center"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[90%] md:w-[80%] rounded-2xl shadow-xl border border-green-400"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full rounded-2xl shadow-lg object-contain"
                  />

                  {/* Text Section (fixed visibility) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-center py-3 rounded-b-2xl">
                    <p className="text-sm md:text-base font-semibold text-green-300 tracking-wide">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Certificate;
