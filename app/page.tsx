"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Gift, Cake, Heart } from "lucide-react";
import { useRef, useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { DiLinux } from "react-icons/di";
import {
  FaNodeJs,
  FaReact,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaHtml5,
  FaJs,
  FaGit,
  FaUbuntu,
  FaAndroid,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMysql, SiNextdotjs, SiPostman } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineCode, AiOutlineEye } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import WhatsAppButton from "./WhatsappButton";


export default function Home() {
  const [liked, setLiked] = useState(true); // State to track if the heart is liked

  const toggleLike = () => {
    setLiked(!liked);
    if (liked) toast.error("Dont stop my HeartBeat!");
    else toast.success("My HeartBeat is Ticking!"); // Toggle the like state
  };
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  return (
    <div className="font-sans bg-black text-gray-100">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Doto:wght,ROND@800,4&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      {/* Header Section */}
      <motion.header
        className="bg-gray-900 text-white shadow-lg py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.header>
      <WhatsAppButton/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-24 text-center">
        <div className="flex justify-center mb-8">
          {/* Profile Image */}
          <div
            className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 animate-pulseGlowing cursor-pointer"
            onClick={() => setIsPreviewOpen(true)}
          >
            <Image
              src="/author.jpg"
              alt="Rohit Rayaan"
              className="rounded-full h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              height={500}
              width={500}
            />
          </div>

          {/* Modal */}
          {isPreviewOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
              onClick={() => setIsPreviewOpen(false)}
            >
              <Image
                src="/author.jpg"
                alt="Rohit Rayaan"
                className="rounded-lg"
                height={800}
                width={800}
              />
            </div>
          )}
        </div>

        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hi, I'm
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300">
              Rohit Rayaan
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "A Mechanical Engineer.",
              2000,
              "A Computer Geek.",
              2000,
              "A Web Developer.",
              2000,
              "A Linux Administrator.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
          />
        </div>

        {/* Like Button (Heart) */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleLike}
            className={`p-2 transition-colors duration-200 ${
              liked ? "text-red-500 beat" : "text-gray-400"
            }`}
          >
            <Heart size={40} />
          </button>
        </div>

        {/* Toast container */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <style jsx>{`
          .beat {
            animation: beat 0.6s infinite;
          }

          @keyframes beat {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}</style>

        {/* icon */}
        <div className="flex justify-center items-center">
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-pink-500"></div>
        </div>

       

       

        {/* TECH STACK */}
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl my-4">
            TECH STACK
          </h1>
        </div>

        <div className="flex justify-center space-x-4 text-3xl my-4">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn"
          >
            <RiNextjsFill className="text-white transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://www.linux.org"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-100"
          >
            <DiLinux className="text-yellow-600 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-200"
          >
            <FaNodeJs className="text-green-600 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-300"
          >
            <FaReact className="text-blue-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://reactnative.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-400"
          >
            <TbBrandReactNative className="text-blue-400 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-500"
          >
            <FaGithub className="text-gray-200 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://www.mysql.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-600"
          >
            <SiMysql className="text-yellow-600 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
        </div>

        <div className="flex justify-center space-x-4 text-3xl my-4">
          <a
            href="https://www.w3.org/html/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn"
          >
            <FaHtml5 className="text-orange-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-100"
          >
            <FaCss3Alt className="text-blue-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-200"
          >
            <FaJs className="text-yellow-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://www.android.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-300"
          >
            <FaAndroid className="text-green-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-400"
          >
            <FaGit className="text-red-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://ubuntu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-500"
          >
            <FaUbuntu className="text-orange-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          <a
            href="https://wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slideIn animation-delay-600"
          >
            <FaWordpress className="text-white-500 transform transition-transform hover:scale-110 hover:rotate-12" />
          </a>
          
        </div>

        <style jsx>{`
          @keyframes slideIn {
            0% {
              transform: translateX(100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slideIn {
            animation: slideIn 0.6s ease-out forwards;
          }

          .animation-delay-100 {
            animation-delay: 100ms;
          }

          .animation-delay-200 {
            animation-delay: 200ms;
          }

          .animation-delay-300 {
            animation-delay: 300ms;
          }

          .animation-delay-400 {
            animation-delay: 400ms;
          }

          .animation-delay-500 {
            animation-delay: 500ms;
          }

          .animation-delay-600 {
            animation-delay: 600ms;
          }
        `}</style>
      </section>
      <SpeedInsights />

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800 text-gray-100">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
            <div className="flex justify-center items-center">
              <div className="h-1 w-20  my-4 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            </div>
          </motion.h2>

          <p className="text-xl max-w-4xl mx-auto">
            I am a <strong>Mechanical Engineer</strong> by degree with a strong
            passion for <strong>Computer Science</strong>. Throughout my career,
            I have been fortunate to work with cutting-edge technologies, solve
            complex problems, and continuously adapt. My journey in engineering
            led me to web development, where I discovered my true passion for
            coding and creating digital solutions. I am always eager to explore
            new challenges and committed to learning, both as a developer and as
            an engineer.
          </p>
        </div>
        <div className="container mx-auto text-center px-6 mt-12">
          {/* Profile Image with Link */}
          <a
            href="https://hexageeky.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/hexgeeky.png"
              alt="HexaGeeky Logo"
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
          </a>

          {/* Text and Link */}
          <p className="mt-4 text-lg text-center">
            I write tech blogs at
            <a
              href="https://hexageeky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-semibold ml-1"
            >
              hexageeky.com
            </a>
          </p>
        </div>
      </section>

      {/* Birthday Section with Icon */}
      <section
        id="birthday"
        className="py-12 bg-gradient-to-r from-black via-gray-400  to-black text-white text-center"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            🎉 Birthday
          </motion.h2>
          <div className="flex justify-center items-center space-x-4">
            <Cake className="text-4xl" />
            <p className="text-xl sm:text-2xl">
              Celebrate my special day with me! 🎂
            </p>
            <Gift className="text-4xl" />
          </div>
          <p className="mt-4 text-lg">
            <strong>26th May</strong>
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com/rohitrayaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-yellow-400 transition"
            >
              <Instagram className="inline-block" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center bg-black text-green-500 font-mono mt-10 py-12">
          <div className="p-4 max-w-lg text-center  rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">The Matrix</h1>
            <div className="text-lg leading-relaxed">
              <TypeAnimation
                sequence={[
                  "Neo, do you want to know what the Matrix is?", // Types text
                  2000, // Waits 2 seconds
                  "The Matrix is everywhere, it is all around us...", // Types new text
                  2000,
                  "It is the world that has been pulled over your eyes to blind you from the truth.",
                  2000,
                  "You take the red pill—you stay in Wonderland...",
                  2000,
                  "And I show you how deep the rabbit hole goes.",
                  2000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                speed={50}
              />
            </div>
            <div className="flex space-x-4 justify-center mt-6">
              <button className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                <AiOutlineCode className="text-2xl" />
                <span>Red Pill</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                <AiOutlineEye className="text-2xl" />
                <span>Blue Pill</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-900 text-gray-100">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Education
            <div className="flex justify-center items-center">
              <div className="h-1 w-20  my-4 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            </div>
          </motion.h2>

          <div className="space-y-8">
            <div className="bg-gray-800 p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">
                Diploma in Mechanical Engineering
              </h3>
              <ul className="list-disc text-left mt-4">
                <li>
                  Studied core principles of mechanical design, thermodynamics,
                  and manufacturing processes.
                </li>
                <li>
                  Worked on real-world projects involving CNC machining and CAD
                  design.
                </li>
                <li>
                  Developed problem-solving skills through hands-on projects and
                  laboratory work.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">
                B.Tech in Computer Science and Engineering (IoT)
              </h3>
              <ul className="list-disc text-left mt-4">
                <li>
                  Focused on the integration of Internet of Things (IoT) with
                  cloud computing and big data analytics.
                </li>
                <li>
                  Studied programming, machine learning, and embedded systems as
                  part of my curriculum.
                </li>
                <li>
                  Worked on IoT-based projects such as smart home automation and
                  sensor networks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-900 text-gray-100">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Experience
            <div className="flex justify-center items-center">
              <div className="h-1 w-20  my-4 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            </div>
          </motion.h2>

          <div className="space-y-12">
            {/* Gabriel India Limited */}
            <div className="bg-gray-800 p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <Image
                  src="/gb.png"
                  alt="Gabriel India Limited"
                  width={150}
                  height={50}
                  className="object-contain rounded-full" // Use rounded-lg for slightly rounded corners
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-white">
                Gabriel India Limited
              </h3>
              <p className="text-gray-400 italic">
                ANCA Operator | July 2022 - December 2023
              </p>
              <ul className="list-disc text-left text-gray-300 mt-4 space-y-2">
                <li>
                  Operated ANCA machine tools to produce high-quality automotive
                  parts.
                </li>
                <li>
                  Monitored machine performance and ensured product quality
                  through regular checks.
                </li>
                <li>
                  Collaborated with engineering teams to optimize machine setups
                  and workflows.
                </li>
                <li>
                  Trained junior operators and ensured adherence to safety and
                  operational standards.
                </li>
              </ul>
            </div>

            {/* DANA Private Limited */}
            <div className="bg-gray-800 p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <Image
                  src="/dana.jpg"
                  alt="DANA Private Limited"
                  width={150}
                  height={50}
                  className="object-contain rounded-full" // Use rounded-lg for slightly rounded corners
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-white">
                DANA Private Limited
              </h3>
              <p className="text-gray-200 italic">
                ANCA Operator | January 2022
              </p>
              <ul className="list-disc text-left text-gray-100 mt-4 space-y-2">
                <li>
                  Set up and operated ANCA CNC grinding machines for precision
                  parts production.
                </li>
                <li>
                  Collaborated with the production team to troubleshoot issues
                  and improve efficiency.
                </li>
                <li>
                  Consistently met production deadlines while maintaining high
                  standards of product quality.
                </li>
                <li>
                  Utilized Lean Manufacturing principles to optimize workflows
                  and reduce downtime.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800 text-white">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
            <div className="flex justify-center items-center">
              <div className="h-1 w-20  my-4 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            </div>
          </motion.h2>
          <p className="text-xl mb-4">
            Feel free to reach out for collaborations, freelance work, or just
            to chat!
          </p>
          <a
            href="mailto:rohitsiitpatna@gmail.com"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg hover:bg-yellow-500 transition"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Follow me on</p>
          
          <div className="flex justify-center items-center space-x-4 mt-4">
            
            <a
              href="https://www.instagram.com/rohitrayaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-400 transition"
            >
              <FaInstagram className="inline-block text-pink-600" />
            </a>
            <a
              href="https://www.discord.com/users/johnwicks#0001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-400 transition"
            >
              <FaDiscord className="inline-block text-blue-600" />
            </a>

            <a
              href="https://github.com/starkryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="text-gray-200 hover:text-black transition-colors duration-200"
              />
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-4">
            <span className="text-lg">Hosted on</span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <img
                src="https://vercel.com/favicon.ico"
                alt="Vercel Logo"
                className="h-6 w-6"
              />
              <span className="text-lg">Vercel</span>
            </a>
          </div>
          <p className="mt-4 text-sm">&copy; 2024 Rohit Rayaan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
