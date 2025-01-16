"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { SiGithub, SiLinkedin, SiInstagram, SiVercel } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/starkryan",
    color: "hover:text-[#333] dark:hover:text-[#fff]",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/rohitrayaan",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/rohitrayaan",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Email",
    icon: HiMail,
    url: "mailto:youremail@example.com",
    color: "hover:text-[#D44638]",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05]" />
      
      {/* Gradient divider */}
      <div className="absolute top-0 inset-x-0 flex justify-center">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative space-y-6"
            >
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <h3 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Let&apos;s Connect!
                </span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Feel free to reach out for collaborations or just a friendly
                hello! I&apos;m always open to discussing new projects or
                opportunities.
              </p>
            </motion.div>

            {/* Right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-end gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.645, 0.045, 0.355, 1.0],
                    }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className={cn(
                        "relative group h-12 w-12 rounded-full border-primary/20 dark:border-primary/20 hover:border-primary/50 dark:hover:border-primary/50 bg-background/50 hover:bg-background backdrop-blur-sm transition-all duration-300",
                        "hover:scale-110 hover:-translate-y-1",
                        social.color
                      )}
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.name}
                        className="flex items-center justify-center"
                      >
                        <Icon className="h-5 w-5 transition-transform duration-300" />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.name}
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-primary/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <AvatarImage src="app.webp" alt="Rohit Rayaan" />
                  <AvatarFallback>RR</AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground">
                  Built with ♥️ by{" "}
                  <a
                    href="https://github.com/starkryan"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-foreground transition-colors relative group inline-flex items-center gap-1"
                  >
                    Rohit Rayaan
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </a>
                </p>
              </div>
              
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20"
              >
                <span className="font-medium">Powered by</span>
                <SiVercel className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
