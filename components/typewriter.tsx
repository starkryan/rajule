"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

const Typewriter = ({ 
  words, 
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 2000 
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const type = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      if (!isDeleting && currentText.length < currentWord.length) {
        // Typing
        setCurrentText(currentWord.slice(0, currentText.length + 1))
        setIsBlinking(false)
        timeoutRef.current = setTimeout(type, typingSpeed)
      } else if (!isDeleting && currentText.length === currentWord.length) {
        // Finished typing
        setIsBlinking(true)
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true)
          setIsBlinking(false)
        }, delayBetweenWords)
      } else if (isDeleting && currentText.length > 0) {
        // Deleting
        setCurrentText(currentWord.slice(0, currentText.length - 1))
        setIsBlinking(false)
        timeoutRef.current = setTimeout(type, deletingSpeed)
      } else if (isDeleting && currentText.length === 0) {
        // Finished deleting
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsBlinking(true)
      }
    }

    timeoutRef.current = setTimeout(type, typingSpeed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="text-foreground"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: isBlinking ? [1, 0] : 1 }}
        transition={isBlinking ? { 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        } : {
          duration: 0
        }}
        className="inline-block w-[3px] h-6 bg-primary"
      />
    </div>
  )
}

export { Typewriter }
