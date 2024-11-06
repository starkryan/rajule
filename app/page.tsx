"use client"

import { TypeAnimation } from 'react-type-animation'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Head>
        <title>Rohit Rayaan - Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="author" content="Rohit Rayaan" />
        <meta name="keywords" content="Rohit Rayaan, Portfolio, Mechanical Engineer, Web Developer, Computer Science" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <motion.header
        className="bg-blue-900 text-white shadow-lg py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"  // Add your logo file in the public folder
              alt="Logo"
              width={40}  // Set your preferred width
              height={40}  // Set your preferred height
              className="object-contain"
            />
            <h1 className="text-xl font-poppins font-bold text-gray-100">
  Rohit Rayaan
</h1>

          </div>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navbar */}
          <nav className={`lg:flex space-x-8 text-lg font-medium ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
            <a href="#education" className="hover:text-yellow-400 transition">Education</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-48 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hi, I'm <span className="text-yellow-400">Rohit Rayaan</span>
          </h2>
          <TypeAnimation
            sequence={[
              'A Mechanical Engineer.',
              2000,
              'A Computer Science Enthusiast.',
              2000,
              'A Web Developer.',
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="bg-clip-text text-2xl md:text-3xl font-medium"
          />
        </div>
        <div className="flex justify-center mb-8">
          <Image
            src="/author.png"
            alt="Rohit Rayaan"
            className="rounded-full h-48 w-48  m-2"
            height={500}
            width={500}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            I am a <strong>Mechanical Engineer</strong> by degree with a strong passion for <strong>Computer Science</strong>. Throughout my career, I have been fortunate to work with cutting-edge technologies, solve complex problems, and continuously adapt. My journey in engineering led me to web development, where I discovered my true passion for coding and creating digital solutions.
            I am always eager to explore new challenges and committed to learning, both as a developer and as an engineer.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>

          <div className="space-y-8">
            {/* Diploma in Mechanical Engineering */}
            <div className="bg-white p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Diploma in Mechanical Engineering</h3>
              <ul className="list-disc text-left text-gray-700 mt-4">
                <li>Studied core principles of mechanical design, thermodynamics, and manufacturing processes.</li>
                <li>Worked on real-world projects involving CNC machining and CAD design.</li>
                <li>Developed problem-solving skills through hands-on projects and laboratory work.</li>
              </ul>
            </div>

            {/* B.Tech in Computer Science and Engineering (IoT) */}
            <div className="bg-white p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">B.Tech in Computer Science and Engineering (IoT)</h3>
              <ul className="list-disc text-left text-gray-700 mt-4">
                <li>Focused on the integration of Internet of Things (IoT) with cloud computing and big data analytics.</li>
                <li>Studied programming, machine learning, and embedded systems as part of my curriculum.</li>
                <li>Worked on IoT-based projects such as smart home automation and sensor networks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>

          <div className="space-y-12">
            {/* Gabriel India Limited */}
            <div className="bg-white p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <Image
                  src="/gb.png"
                  alt="Gabriel India Limited"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Gabriel India Limited</h3>
              <p className="text-gray-600 italic">ANCA Operator | July 2022 - December 2023</p>
              <ul className="list-disc text-left text-gray-700 mt-4 space-y-2">
                <li>Operated ANCA machine tools to produce high-quality automotive parts.</li>
                <li>Monitored machine performance and ensured product quality through regular checks.</li>
                <li>Collaborated with engineering teams to optimize machine setups and workflows.</li>
                <li>Trained junior operators and ensured adherence to safety and operational standards.</li>
              </ul>
            </div>

            {/* DANA Private Limited */}
            <div className="bg-white p-8 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <Image
                  src="/dana.jpg"
                  alt="DANA Private Limited"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">DANA Private Limited</h3>
              <p className="text-gray-600 italic">ANCA Operator | January 2022</p>
              <ul className="list-disc text-left text-gray-700 mt-4 space-y-2">
                <li>Set up and operated ANCA CNC grinding machines for precision parts production.</li>
                <li>Collaborated with the production team to troubleshoot issues and improve efficiency.</li>
                <li>Consistently met production deadlines while maintaining high standards of product quality.</li>
                <li>Utilized Lean Manufacturing principles to optimize workflows and reduce downtime.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h2>
          <p className="text-xl mb-4">Feel free to reach out for collaborations, freelance work, or just to chat!</p>
          <a href="mailto:rohitsiitpatna@gmail.com" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full text-lg hover:bg-yellow-300 transition">
            Send Email
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Rohit Rayaan. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com/rohitrayaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-yellow-400 transition"
            >
              <Instagram className="inline-block" /> {/* Lucide Instagram icon */}
            </a>
          </div>
          {/* Hosted on Vercel */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            <span className="text-white text-lg">Hosted on</span>
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
              <span className="text-white text-lg">Vercel</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
