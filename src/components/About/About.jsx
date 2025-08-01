import React, { useState, useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  const typingTexts = ['Fullstack Developer', 'Coder', 'Web Developer'];

  const [maxWidth, setMaxWidth] = useState(0);
  const hiddenTextRef = useRef(null);

  const longestText = typingTexts.reduce((a, b) => (a.length > b.length ? a : b));

  useEffect(() => {
    if (hiddenTextRef.current) {
      setMaxWidth(hiddenTextRef.current.offsetWidth);
    }
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between md:gap-x-16">

        {}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
          {}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Karanpreet Singh
          </h2>

          {}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight whitespace-nowrap flex justify-center md:justify-start">
            <span className="text-white">I am a&nbsp;</span>

            {}
            <span
              className="inline-block text-left"
              style={{ minWidth: maxWidth ? `${maxWidth}px` : 'auto' }}
            >
              <ReactTypingEffect
                text={typingTexts}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </span>

            {}
            <span
              ref={hiddenTextRef}
              className="absolute opacity-0 pointer-events-none text-xl sm:text-2xl md:text-3xl font-semibold"
            >
              {longestText}
            </span>
          </h3>

          {}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mt-6 leading-relaxed">
            I am a full-stack developer building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other modern technologies to create seamless
            user experiences and efficient solutions.
          </p>
        </div>

        {}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Karanpreet Singh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

      {}
      <div className="flex justify-center mt-10">
        <a
          href="https://drive.google.com/file/d/128pMS8aDvtedlKsJstB-GA4O310pMJA3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;