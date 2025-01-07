"use client"

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

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
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Blog',
    href: '#blog',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export default function MainNav() {
  const [activeSection, setActiveSection] = React.useState('home')
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY

      setIsScrolled(scrollPosition > 50)

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
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4"
      >
        <header 
          className={cn(
            "rounded-full border bg-background/80 backdrop-blur-md transition-all duration-300",
            isScrolled ? "shadow-lg" : "shadow-md"
          )}
        >
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Link 
                  href="/" 
                  className="text-lg font-bold relative group"
                >
                  <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                    Rohit Rayaan
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>

              <nav className="hidden md:flex items-center space-x-1 bg-muted/50 rounded-full px-2 py-1">
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
                        "relative px-4 py-2 rounded-full transition-colors duration-200 hover:text-foreground/80",
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

              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ThemeToggle />
                </motion.div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-24 z-40 mx-4 rounded-2xl border bg-background/80 backdrop-blur-md shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 rounded-lg transition-colors",
                      activeSection === item.href.slice(1)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                    onClick={() => {
                      setActiveSection(item.href.slice(1))
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
