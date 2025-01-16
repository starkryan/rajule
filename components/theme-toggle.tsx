"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { useThemeStore } from "@/store/use-theme-store"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme: setThemeStore } = useThemeStore()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setThemeStore(newTheme as 'light' | 'dark' | 'system')
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-10 w-10 relative">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-10 w-10 rounded-full border-primary/20 dark:border-primary/20 hover:border-primary/50 dark:hover:border-primary/50 bg-background/50 hover:bg-background backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === 'light' && (
              <motion.div
                key="light"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
              </motion.div>
            )}
            {theme === 'dark' && (
              <motion.div
                key="dark"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Moon className="h-[1.2rem] w-[1.2rem] text-blue-500" />
              </motion.div>
            )}
            {theme === 'system' && (
              <motion.div
                key="system"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Laptop className="h-[1.2rem] w-[1.2rem] text-primary" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="animate-in fade-in-0 zoom-in-95 w-40 rounded-xl border-primary/20 bg-background/80 backdrop-blur-lg"
      >
        <DropdownMenuItem 
          onClick={() => handleThemeChange("light")}
          className="flex items-center gap-2 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 rounded-lg m-1"
        >
          <motion.div 
            whileHover={{ rotate: 180 }} 
            whileTap={{ scale: 0.9 }}
            className="p-1 rounded-full bg-yellow-500/10"
          >
            <Sun className="h-4 w-4 text-yellow-500" />
          </motion.div>
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleThemeChange("dark")}
          className="flex items-center gap-2 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 rounded-lg m-1"
        >
          <motion.div 
            whileHover={{ rotate: 180 }} 
            whileTap={{ scale: 0.9 }}
            className="p-1 rounded-full bg-blue-500/10"
          >
            <Moon className="h-4 w-4 text-blue-500" />
          </motion.div>
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleThemeChange("system")}
          className="flex items-center gap-2 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 rounded-lg m-1"
        >
          <motion.div 
            whileHover={{ rotate: 180 }} 
            whileTap={{ scale: 0.9 }}
            className="p-1 rounded-full bg-primary/10"
          >
            <Laptop className="h-4 w-4 text-primary" />
          </motion.div>
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
