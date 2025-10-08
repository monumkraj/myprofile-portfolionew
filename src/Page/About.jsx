import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import BackgroundAnimation from './backgroundanimation';

function About() {
  return (
    <div className="font-['satoshi']  bg-transpairent text-white overflow-hidden">
      <BackgroundAnimation />

      {/* Center Wrapper */}
      <div className="flex  justify-center items-center py-8 px-4 sm:px-6 md:px-8">
        {/* Parent Responsive Box */}
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center lg:items-start justify-between bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 rounded-xl shadow-2xl overflow-hidden">

          {/* ---------- TEXT BOX ---------- */}
          <motion.div
            className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 text-white space-y-4 leading-relaxed flex flex-col justify-center h-auto lg:h-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-yellow-200"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I’m Monu 👋
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I am from <span className="font-semibold">Bihar</span>, currently staying in{' '}
              <span className="font-semibold">Bengaluru</span>. I graduated in 2023 from{' '}
              <span className="font-semibold">Ram Govind Institute of Technology, Koderma</span>.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              My branch was <span className="font-semibold">(CSE)</span>. I am a{' '}
              <span className="font-semibold">Frontend Developer</span> specializing in{' '}
              <span className="font-semibold">React.js</span>.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I have 1 year of hands-on experience at{' '}
              <span className="font-semibold">Techasoft Technology</span>. I worked on two major projects:
            </motion.p>

            <motion.ul
              className="list-disc list-inside pl-4 space-y-1 text-base sm:text-lg md:text-xl lg:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <li><span className="font-semibold">Trip-Tie</span></li>
              <li><span className="font-semibold">SurfLocal (Property Hub)</span></li>
            </motion.ul>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Technologies I’ve used:
              <span className="block mt-2 font-semibold text-blue-100">
              | React.js | Node.js | JavaScript | Mapping Functions | Redux |Python | Dejango |Sql | mysql | Bootstrap | Tailwind CSS | Sass
              </span>
            </motion.p>
          </motion.div>

          {/* ---------- IMAGE BOX ---------- */}
          <div className="w-full image-box lg:w-1/2 flex justify-center items-center p-6">
            <img
              className="image-new w-[85%] sm:w-[100%] md:w-[80%] lg:w-[100%] xl:w-[70%] rounded-2xl shadow-2xl object-cover"
              src="./mk.jpg"
              alt="Monu Kumar"
            />
          </div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </div>
  );
}

export default About;
