"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { gsap } from "gsap"

export default function Experience() {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView && timelineRef.current) {
      gsap.to(".timeline-line", {
        height: "100%",
        duration: 1.5,
        ease: "power3.out",
      })

      gsap.to(".timeline-dot", {
        scale: 1,
        stagger: 0.3,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
    }
  }, [isInView])

  const experiences = [
    {
      title: "UI/UX Designer & Developer",
      company: "SAPHAARE LABS PRIVATE LIMITED",
      location: "Remote",
      period: "September 2024 - Present",
      description: [
        "Led the design and development of an end-to-end AI SaaS platform with a focus on intuitive user experience and accessibility.",
        "Created user flows, wireframes, and high-fidelity prototypes using Figma before implementing the designs with React.",
        "Conducted user research and usability testing to iterate on designs and improve user satisfaction by 40%.",
        "Implemented responsive designs with micro-interactions that enhanced user engagement and reduced bounce rate by 25%.",
      ],
      link: "https://every-ai-toollls.pages.dev/",
      badges: ["UI/UX", "Figma", "User Research", "Prototyping", "React"],
    },
    {
      title: "Frontend Designer",
      company: "Project Dark Horse (PDH)",
      location: "Bangalore, Karnataka",
      period: "Oct 2024 - Present",
      description: [
        "Designed and developed highly responsive landing pages with a focus on visual storytelling and conversion optimization.",
        "Created brand identity guidelines and design systems to ensure consistency across multiple platforms.",
        "Implemented advanced animations and micro-interactions to enhance user engagement and brand perception.",
        "Collaborated with stakeholders to translate business requirements into intuitive user interfaces.",
      ],
      links: [
        { name: "Moody Foodie", url: "https://moody-foodie.vercel.app/" },
        { name: "Painless Cabs", url: "https://painless-cabs-eight.vercel.app/" },
      ],
      badges: ["UI Design", "Animation", "Branding", "Design Systems"],
    },
  ]

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
        <h2 className="text-primary font-medium mb-2">My Journey</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Professional Experience
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Here's a glimpse into my professional journey and the experiences that have shaped my career in UI/UX design.
        </p>
      </motion.div>

      <div className="relative" ref={timelineRef}>
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform md:-translate-x-px">
          <div
            className="timeline-line absolute left-0 top-0 w-full bg-primary origin-top"
            style={{ height: "0%" }}
          ></div>
        </div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-16`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 mt-6">
              <div className="timeline-dot w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center transform scale-0">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-10 md:pl-0`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="bg-muted/30 group-hover:bg-primary/5 transition-colors duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg mt-1">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-sm font-normal group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.badges.map((badge, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        View Project
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}

                    {exp.links && (
                      <div className="flex flex-wrap gap-4">
                        {exp.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center"
                          >
                            {link.name}
                            <svg
                              className="ml-1 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="pt-6 pb-6">
            <h4 className="text-xl font-medium mb-2">Education</h4>
            <p className="text-lg font-semibold">Scaler School Of Technology</p>
            <p className="text-foreground/70">B.Sc Computer Science</p>
            <p className="text-foreground/70">July 2023 - Present</p>
            <div className="mt-4 flex justify-center">
              <Badge variant="outline" className="font-normal">
                UI/UX Specialization
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

