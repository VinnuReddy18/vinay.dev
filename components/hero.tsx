"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, MousePointer } from "lucide-react"
import Typed from "typed.js"

export default function Hero() {
  const typedRef = useRef(null)
  const heroRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["UI/UX Designer", "Frontend Developer", "Visual Designer", "Creative Coder"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    })

    return () => {
      typed.destroy()
    }
  }, [])

  useEffect(() => {
    if (!heroRef.current) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      ref={heroRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="order-2 lg:order-1">
        <motion.div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4" variants={itemVariants}>
          <span className="text-primary font-medium">Hello, I'm a Designer & Developer</span>
        </motion.div>

        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative" variants={itemVariants}>
          <span className="relative z-10">Vinay Kumar Reddy</span>
          <motion.div
            className="absolute -inset-2 bg-primary/5 rounded-lg -z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </motion.h1>

        <motion.div className="text-xl md:text-2xl text-foreground/80 mb-6 flex items-center" variants={itemVariants}>
          I'm a <span className="text-primary mx-2" ref={typedRef}></span>
        </motion.div>

        <motion.p className="text-foreground/70 mb-8 max-w-lg" variants={itemVariants}>
          A passionate designer and developer with a keen eye for detail and a love for creating intuitive, engaging
          user experiences. I blend creativity with technical expertise to build digital products that users love.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <Button size="lg" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>

          <Button size="lg" variant="outline" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Download Resume
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </span>
            <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center text-foreground/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <MousePointer className="h-4 w-4 mr-2" />
          <span>Move your cursor around to interact with the elements</span>
        </motion.div>
      </div>

      <motion.div
        className="order-1 lg:order-2 flex justify-center"
        variants={itemVariants}
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative bg-background rounded-full overflow-hidden border-4 border-background">
            <img
              src="/pic1.jpeg"
              alt="Vinay Kumar Reddy Bitmoji"
              className="w-64 h-64 md:w-80 md:h-80 object-cover"
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
              style={{
                transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            />
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-8 -right-8 bg-card p-3 rounded-lg shadow-lg flex items-center space-x-2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-lg">🎨</span>
            </div>
            <span className="font-medium">UI/UX</span>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-8 bg-card p-3 rounded-lg shadow-lg flex items-center space-x-2"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-lg">💻</span>
            </div>
            <span className="font-medium">Dev</span>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-12 bg-card p-3 rounded-lg shadow-lg flex items-center space-x-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          >
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-lg">✨</span>
            </div>
            <span className="font-medium">Creative</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

