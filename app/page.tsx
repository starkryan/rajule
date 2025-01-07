"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import MainNav from '@/components/main-nav'
import Footer from '@/components/footer'
import { Typewriter } from '@/components/typewriter'
import { ScrollProgress } from '@/components/scroll-progress'
import { ScrollToTop } from '@/components/scroll-to-top'
import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiExpress, SiPython,SiGithub, SiPostgresql, SiDocker, SiGithubactions, SiLinux, SiGit, SiFigma, SiPostman } from 'react-icons/si'
import { FaBrain, FaBriefcase, FaCode, FaNewspaper, FaRocket, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skills = [
  { 
    name: "Frontend", 
    icon: SiReact,
    items: [
      { name: "React", icon: <SiReact className="h-3 w-3 text-[#61DAFB] hover:text-[#61DAFB]/80" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-3 w-3 text-[#000000] dark:text-[#FFFFFF] hover:text-[#666666] dark:hover:text-[#999999]" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-3 w-3 text-[#3178C6] hover:text-[#3178C6]/80" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-3 w-3 text-[#06B6D4] hover:text-[#06B6D4]/80" /> }
    ] 
  },
  { 
    name: "Backend", 
    icon: SiNodedotjs,
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="h-3 w-3 text-[#339933] hover:text-[#339933]/80" /> },
      { name: "Express", icon: <SiExpress className="h-3 w-3 text-[#000000] dark:text-[#FFFFFF] hover:text-[#666666] dark:hover:text-[#999999]" /> },
      { name: "Python", icon: <SiPython className="h-3 w-3 text-[#3776AB] hover:text-[#3776AB]/80" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-3 w-3 text-[#4169E1] hover:text-[#4169E1]/80" /> }
    ] 
  },
  { 
    name: "DevOps", 
    icon: SiDocker,
    items: [
      { name: "Docker", icon: <SiDocker className="h-3 w-3 text-[#2496ED] hover:text-[#2496ED]/80" /> },
      { name: "CI/CD", icon: <SiGithubactions className="h-3 w-3 text-[#2088FF] hover:text-[#2088FF]/80" /> },
      { name: "Linux", icon: <SiLinux className="h-3 w-3 text-[#FCC624] hover:text-[#FCC624]/80" /> }
    ] 
  },
  { 
    name: "Tools", 
    icon: SiGit,
    items: [
      { name: "Git", icon: <SiGit className="h-3 w-3 text-[#F05032] hover:text-[#F05032]/80" /> },
      { name: "Figma", icon: <SiFigma className="h-3 w-3 text-[#F24E1E] hover:text-[#F24E1E]/80" /> },
      { name: "Postman", icon: <SiPostman className="h-3 w-3 text-[#FF6C37] hover:text-[#FF6C37]/80" /> }
    ] 
  }
]

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Led the development of modern web applications using React and Next.js",
    skills: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2020 - 2022",
    description: "Developed full-stack applications with focus on performance and scalability",
    skills: ["Node.js", "React", "PostgreSQL"]
  }
]

const blogPosts = [
  {
    title: "Building Modern UIs with React and Framer Motion",
    date: "Jan 2024",
    readTime: "5 min read",
    description: "Learn how to create engaging user interfaces with smooth animations"
  },
  {
    title: "The Power of Server Components in Next.js",
    date: "Dec 2023",
    readTime: "7 min read",
    description: "Deep dive into Next.js server components and their benefits"
  }
]

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <ScrollToTop />
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          id="home"
          className="container mx-auto px-4 py-24 flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Avatar className="w-32 h-32 mb-8 mt-4 border-2 ring-2 ring-primary ring-offset-2 ring-offset-background">
              <AvatarImage src="author.webp" alt="Rohit Rayaan" />
              <AvatarFallback>RR</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight mb-4"
          >
            Rohit&nbsp;Rayaan
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-8"
          >
            <Typewriter 
              words={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Open Source Contributor",
                "Tech Explorer"
              ]}
              typingSpeed={60}
              deletingSpeed={40}
              delayBetweenWords={2000}
              className="text-foreground"
            />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex gap-2 flex-wrap justify-center"
          >
            <Badge variant="secondary" className="animate-in fade-in-50">React</Badge>
            <Badge variant="secondary" className="animate-in fade-in-50 fill-mode-both delay-100">Next.js</Badge>
            <Badge variant="secondary" className="animate-in fade-in-50 fill-mode-both delay-200">TypeScript</Badge>
            <Badge variant="secondary" className="animate-in fade-in-50 fill-mode-both delay-300">Node.js</Badge>
          </motion.div>
        </motion.section>

        <Separator className="my-8" />

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <FaBrain className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <category.icon className="h-5 w-5 text-primary" />
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <Badge 
                          key={skill.name} 
                          variant="outline"
                          className="flex items-center gap-1 py-1"
                        >
                          {skill.icon}
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="container mx-auto px-4 py-16 bg-muted/50"
        >
          <div className="flex items-center gap-2 mb-8">
            <FaBriefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary/20 hover:before:bg-primary before:transition-colors"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-[5px]" />
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                <p className="mt-2">{exp.description}</p>
                <div className="flex gap-2 mt-3">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-8">
            <FaCode className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Project {index + 1}
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <SiGithub className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>A brief description of the project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Detailed explanation of the project, technologies used, and your role.
                    </p>
                    <div className="flex gap-2">
                      <Badge>React</Badge>
                      <Badge>{index === 0 ? "TypeScript" : index === 1 ? "Next.js" : "Node.js"}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <motion.section 
          id="blog" 
          className="container mx-auto px-4 py-16 bg-muted/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <FaNewspaper className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Latest Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <FaArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardDescription className="mt-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <FaRocket className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-muted-foreground mb-8">
              I&apos;m always open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="mailto:your.email@example.com">
                  Send Email
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
