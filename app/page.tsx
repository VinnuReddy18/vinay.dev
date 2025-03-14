"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Moon, Sun, Github, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import CustomCursor from "@/components/custom-cursor"
import ParticleBackground from "@/components/particle-background"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import DesignProcess from "@/components/design-process"
import Contact from "@/components/contact"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

export default function Home() {
  const [theme, setTheme] = useState("light")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Register GSAP plugins
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Scroll spy
  useEffect(() => {
    const sections = ["home", "experience", "skills", "design-process", "projects", "contact"]

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [isLoading])

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Design Process", href: "#design-process" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary font-bold text-xl">V</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {!isMobile && <CustomCursor />}
      <ParticleBackground />

      <div
        ref={containerRef}
        className={`min-h-screen bg-background transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-primary relative"
            >
              <span className="relative z-10">Vinay</span>
              <span className="text-primary relative z-10">.</span>
              <span className="text-foreground relative z-10">dev</span>
              <motion.div
                className="absolute -inset-1 bg-primary/10 rounded-md -z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
            </motion.div>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`text-foreground/80 hover:text-primary transition-colors relative cursor-pointer ${
                    activeSection === item.href.substring(1) ? "text-primary" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/VinnuReddy18"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <Github className="h-5 w-5 text-foreground/80 group-hover:text-primary transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/vinayreddy1829/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <Linkedin className="h-5 w-5 text-foreground/80 group-hover:text-primary transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </motion.a>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative group"
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </span>
              </Button>

              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
              >
                <div className="container mx-auto px-4 py-4">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={`text-foreground/80 hover:text-primary transition-colors ${
                          activeSection === item.href.substring(1) ? "text-primary" : ""
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="container mx-auto px-4 pt-24 pb-16">
          <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
            <Hero />
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <a
                href="#experience"
                className="animate-bounce flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="mb-2">Scroll Down</span>
                <ChevronDown className="h-6 w-6" />
              </a>
            </motion.div>
          </section>

          <section id="experience" className="py-20">
            <Experience />
          </section>

          <section id="skills" className="py-20">
            <Skills />
          </section>

          <section id="design-process" className="py-20">
            <DesignProcess />
          </section>

          <section id="projects" className="py-20">
            <Projects />
          </section>

          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>

        <footer className="bg-muted/30 border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-foreground/60">© {new Date().getFullYear()} Vinay Kumar Reddy. All rights reserved.</p>
            <p className="text-foreground/40 text-sm mt-2">
              Designed & Developed with ❤️ using Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

