"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  words: string[]
  className?: string
}

const Typewriter = ({ words, className = "" }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
        if (currentText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length - 1))
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={`inline-block ${className}`}>
      <motion.span
        key={currentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-block"
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block w-[2px] h-5 bg-foreground"
      />
    </div>
  )
}

export { Typewriter }
