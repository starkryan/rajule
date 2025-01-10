"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiGithub,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import {
  FaBrain,
  FaCode,
  FaRocket,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  {
    name: "Frontend",
    icon: SiReact,
    items: [
      {
        name: "React",
        icon: (
          <SiReact className="h-3 w-3 text-[#61DAFB] hover:text-[#61DAFB]/80" />
        ),
      },
      {
        name: "Next.js",
        icon: (
          <SiNextdotjs className="h-3 w-3 text-[#000000] dark:text-[#FFFFFF] hover:text-[#666666] dark:hover:text-[#999999]" />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <SiTypescript className="h-3 w-3 text-[#3178C6] hover:text-[#3178C6]/80" />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="h-3 w-3 text-[#06B6D4] hover:text-[#06B6D4]/80" />
        ),
      },
    ],
  },
  {
    name: "Backend",
    icon: SiNodedotjs,
    items: [
      {
        name: "Node.js",
        icon: (
          <SiNodedotjs className="h-3 w-3 text-[#339933] hover:text-[#339933]/80" />
        ),
      },
      {
        name: "Express",
        icon: (
          <SiExpress className="h-3 w-3 text-[#000000] dark:text-[#FFFFFF] hover:text-[#666666] dark:hover:text-[#999999]" />
        ),
      },
      {
        name: "Python",
        icon: (
          <SiPython className="h-3 w-3 text-[#3776AB] hover:text-[#3776AB]/80" />
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <SiPostgresql className="h-3 w-3 text-[#4169E1] hover:text-[#4169E1]/80" />
        ),
      },
    ],
  },
  {
    name: "DevOps",
    icon: SiDocker,
    items: [
      {
        name: "Docker",
        icon: (
          <SiDocker className="h-3 w-3 text-[#2496ED] hover:text-[#2496ED]/80" />
        ),
      },
      {
        name: "CI/CD",
        icon: (
          <SiGithubactions className="h-3 w-3 text-[#2088FF] hover:text-[#2088FF]/80" />
        ),
      },
      {
        name: "Linux",
        icon: (
          <SiLinux className="h-3 w-3 text-[#FCC624] hover:text-[#FCC624]/80" />
        ),
      },
    ],
  },
  {
    name: "Tools",
    icon: SiGit,
    items: [
      {
        name: "Git",
        icon: (
          <SiGit className="h-3 w-3 text-[#F05032] hover:text-[#F05032]/80" />
        ),
      },
      {
        name: "Figma",
        icon: (
          <SiFigma className="h-3 w-3 text-[#F24E1E] hover:text-[#F24E1E]/80" />
        ),
      },
      {
        name: "Postman",
        icon: (
          <SiPostman className="h-3 w-3 text-[#FF6C37] hover:text-[#FF6C37]/80" />
        ),
      },
    ],
  },
];

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <ScrollToTop />
      <MainNav />
      <SpeedInsights />
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
            <Avatar className="w-48 h-48 mb-8 mt-4 border-2 ring-2 ring-primary ring-offset-2 ring-offset-background">
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
          <motion.div variants={fadeInUp} className="text-xl mb-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "UI/UX Enthusiast",
                1500,
                "Open Source Contributor",
                1500,
                "Tech Explorer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-2 flex-wrap justify-center"
          >
            <Badge
              variant="secondary"
              className="animate-in fade-in-50 flex items-center gap-1.5"
            >
              <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" />
              React
            </Badge>
            <Badge
              variant="secondary"
              className="animate-in fade-in-50 fill-mode-both delay-100 flex items-center gap-1.5"
            >
              <SiNextdotjs className="h-3.5 w-3.5" />
              Next.js
            </Badge>
            <Badge
              variant="secondary"
              className="animate-in fade-in-50 fill-mode-both delay-200 flex items-center gap-1.5"
            >
              <SiTypescript className="h-3.5 w-3.5 text-[#3178C6]" />
              TypeScript
            </Badge>
            <Badge
              variant="secondary"
              className="animate-in fade-in-50 fill-mode-both delay-300 flex items-center gap-1.5"
            >
              <SiNodedotjs className="h-3.5 w-3.5 text-[#339933]" />
              Node.js
            </Badge>
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
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <SiGithub className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      A brief description of the project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Detailed explanation of the project, technologies used,
                      and your role.
                    </p>
                    <div className="flex gap-2">
                      <Badge>React</Badge>
                      <Badge>
                        {index === 0
                          ? "TypeScript"
                          : index === 1
                          ? "Next.js"
                          : "Node.js"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Page 4 */}
        <div
          className="relative flex flex-col items-center justify-center py-32 w-full overflow-hidden bg-background"
          id="page4"
        >
          {/* Grid Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 top-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute right-10 top-1/3 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-300" />
            <div className="absolute left-1/3 bottom-1/4 w-28 h-28 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              {/* Main Content */}
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none">
                  <TypeAnimation
                    sequence={[
                      "Building Amazing Experiences",
                      1000,
                      "Crafting Digital Solutions",
                      1000,
                      "Creating Innovative Apps",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    repeat={Infinity}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                  />
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Passionate about creating elegant solutions and delivering
                  exceptional user experiences through clean, efficient code.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: <FaCode className="h-6 w-6 text-primary" />,
                    title: "Full Stack Development",
                    description:
                      "Building end-to-end solutions with modern technologies",
                  },
                  {
                    icon: <SiFigma className="h-6 w-6 text-primary" />,
                    title: "UI/UX Design",
                    description:
                      "Creating intuitive and beautiful user interfaces",
                  },
                  {
                    icon: <SiGithub className="h-6 w-6 text-primary" />,
                    title: "Open Source",
                    description:
                      "Contributing to and maintaining open source projects",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                      <div className="relative space-y-2">
                        <div className="p-3 bg-muted rounded-lg w-fit">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <Button size="lg" className="group" asChild>
                  <a href="#contact">
                    Let&apos;s Work Together
                    <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

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
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="mailto:your.email@example.com">Send Email</a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
