"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { gsap } from "gsap"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView && projectsRef.current) {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    }
  }, [isInView, activeFilter])

  const projects = [
    {
      title: "Event Management System",
      description: "A comprehensive system for managing events, participants, and venues with CRUD operations.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      category: "Backend",
      technologies: ["UI/UX Design", "Wireframing", "Prototyping", "User Testing"],
      
      github: "https://github.com/VinnuReddy18/event-management-system",
      achievements: [
        "Created user flows and wireframes to improve the event registration process",
        "Designed an intuitive dashboard for event organizers to manage participants",
        "Conducted usability testing with 15 users to refine the interface",
        "Implemented responsive design for all device sizes",
      ],
    },
    {
      title: "Student Helpline Bot",
      description: "An intuitive web interface for students to get assistance with their queries.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      category: "Chatbot",
      technologies: ["UI Design", "Interaction Design", "Chatbot UI", "Accessibility"],
      link: "https://scalersage-sst.onrender.com/",
      github: "https://github.com/VinnuReddy18/Scaler-Student-InfoBot",
      achievements: [
        "Designed a conversational UI that reduced response time by 40%",
        "Created a design system for consistent chatbot interactions",
        "Improved accessibility for users with disabilities",
        "Designed micro-interactions to enhance user engagement",
      ],
    },
    {
      title: "Textract OCR",
      description: "A tool for extracting text from images using AWS Textract.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      category: "Image Processing",
      technologies: ["UI Design", "Frontend Development", "User Testing", "Interaction Design"],
      link: "https://textract-ocr.vercel.app/",
      github: "https://github.com/VinnuReddy18/textract-ocr",
      achievements: [
        "Designed an intuitive drag-and-drop interface for image uploads",
        "Created visual feedback systems for processing status",
        "Implemented responsive design for mobile and desktop users",
        "Designed data visualization for extracted text results",
      ],
    },
    {
      title: "AI SaaS Platform",
      description: "An end-to-end AI SaaS platform integrating various AI tools.",
      image: "/pic2.jpeg",
      category: "ui-ux",
      technologies: ["UX Research", "UI Design", "Design System", "Prototyping"],
      link: "https://every-ai-toollls.pages.dev/",
      github: "#",
      achievements: [
        "Conducted user research to identify pain points in AI tool usage",
        "Created a unified design system for multiple AI services",
        "Designed an intuitive onboarding flow that increased user retention by 35%",
        "Implemented dark/light mode with smooth transitions",
      ],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-primary font-medium mb-2">My Work</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Featured Projects
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Here are some of the UI/UX projects I've worked on. Each project represents a unique design challenge and
          solution.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {["all", "ui-ux", "frontend", "branding"].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="capitalize relative overflow-hidden group"
            >
              <span className="relative z-10">
                {filter === "all" ? "All Projects" : filter === "ui-ux" ? "UI/UX Design" : filter}
              </span>
              {activeFilter !== filter && (
                <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              )}
            </Button>
          ))}
        </div>
      </div>

      <div ref={projectsRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants} className="project-card h-full">
                <Card className="overflow-hidden border-border h-full flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="capitalize bg-primary text-primary-foreground">
                        {project.category === "ui-ux" ? "UI/UX Design" : project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary" size="sm" className="mr-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Preview
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-2 text-sm text-foreground/80">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>

                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Button variant="outline" size="lg" asChild className="group relative overflow-hidden">
          <a href="https://github.com/VinnuReddy18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <span className="relative z-10 flex items-center">
              <Github className="mr-2 h-5 w-5" />
              View More Projects on GitHub
            </span>
            <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

