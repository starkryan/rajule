"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { cn } from "@/lib/utils";

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
      {/* Gradient divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl ml-8 font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Let&apos;s Connect!
              </h3>
              <p className="text-muted-foreground max-w-md ml-8 mr-8 text-center">
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
              className="flex justify-center md:justify-end space-x-4"
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
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "h-10 w-10 rounded-xl hover:scale-110 transition-transform duration-300",
                        social.color
                      )}
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
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
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground text-center">
              Built with ♥️ by{" "}
              <a
                href="https://github.com/starkryan"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline-offset-4 hover:text-foreground transition-colors relative group"
              >
                Rohit&nbsp;Rayaan
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
