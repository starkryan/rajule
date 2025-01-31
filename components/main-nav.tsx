"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export default function MainNav() {
  const [activeSection, setActiveSection] = React.useState('home')
  const [visible, setVisible] = React.useState(true)
  const lastScrollY = React.useRef(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY.current ? "down" : "up"
      
      // Hide on scroll down, show on scroll up
      if (direction === "down" && scrollY > 50) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      
      lastScrollY.current = scrollY

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
      className="sticky top-6 left-0 right-0 z-50 mx-auto max-w-fit"
    >
      <header 
        className={cn(
          "rounded-full border bg-background/80 backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "px-4 sm:px-6 py-2"
        )}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link 
            href="/" 
            className="text-sm font-medium relative group hidden sm:block"
          >
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent dark:text-transparent font-bold">
              Rohit Rayaan
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>

          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.645, 0.045, 0.355, 1.000]
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full transition-colors duration-200 hover:text-foreground/80",
                    activeSection === item.href.slice(1)
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                  onClick={() => setActiveSection(item.href.slice(1))}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary/10"
                      layoutId="navbar-active"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </header>
    </motion.div>
  )
}