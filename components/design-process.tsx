"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { gsap } from "gsap"

export default function DesignProcess() {
  const processRef = useRef(null)
  const isInView = useInView(processRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView && processRef.current) {
      gsap.to(".process-line", {
        width: "100%",
        duration: 1.5,
        ease: "power3.out",
      })

      gsap.to(".process-dot", {
        scale: 1,
        stagger: 0.3,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
    }
  }, [isInView])

  const designProcess = [
    {
      title: "Research",
      description:
        "I begin by understanding the problem space through user research, competitive analysis, and stakeholder interviews.",
      details: [
        "User interviews and surveys",
        "Market and competitor analysis",
        "Stakeholder workshops",
        "Defining project goals and metrics",
      ],
      icon: "🔍",
    },
    {
      title: "Define",
      description: "Based on research insights, I define user personas, user journeys, and key problem statements.",
      details: [
        "Creating user personas",
        "Mapping user journeys",
        "Defining problem statements",
        "Establishing design requirements",
      ],
      icon: "📋",
    },
    {
      title: "Ideate",
      description:
        "I explore multiple solutions through sketching, wireframing, and collaborative brainstorming sessions.",
      details: ["Sketching and ideation", "Low-fidelity wireframes", "Information architecture", "Content strategy"],
      icon: "💡",
    },
    {
      title: "Design",
      description:
        "I create high-fidelity designs and interactive prototypes that align with brand guidelines and user needs.",
      details: [
        "High-fidelity mockups",
        "Interactive prototypes",
        "Visual design and UI components",
        "Design system development",
      ],
      icon: "🎨",
    },
    {
      title: "Test",
      description: "I validate designs through usability testing, gathering feedback to refine the solution.",
      details: ["Usability testing", "A/B testing", "Heuristic evaluation", "Accessibility testing"],
      icon: "🧪",
    },
    {
      title: "Implement",
      description: "I collaborate with developers to ensure the design is implemented accurately and efficiently.",
      details: ["Developer handoff", "Implementation support", "QA and design review", "Design documentation"],
      icon: "🚀",
    },
    {
      title: "Iterate",
      description: "After launch, I analyze user data and feedback to continuously improve the design.",
      details: ["Analytics review", "User feedback collection", "Performance evaluation", "Continuous improvement"],
      icon: "🔄",
    },
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-primary font-medium mb-2">How I Work</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          My Design Process
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          I follow a user-centered design process that ensures the final product meets both user needs and business
          goals. Here's how I approach design challenges:
        </p>
      </motion.div>

      <div className="relative" ref={processRef}>
        {/* Process line */}
        <div className="hidden md:block absolute left-1/2 top-8 h-4 -translate-x-1/2 w-full max-w-4xl mx-auto">
          <div className="relative h-1 bg-border/50 rounded-full">
            <div
              className="process-line absolute left-0 top-0 h-full bg-primary rounded-full"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {designProcess.map((step, index) => (
            <div key={index} className="relative">
              {/* Process dot */}
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8">
                <div className="process-dot w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center transform scale-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mt-8 md:mt-16"
              >
                <Card className="h-full overflow-hidden border-border hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="bg-muted/30 group-hover:bg-primary/5 transition-colors duration-300 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 text-center">
                    <p className="text-foreground/70 mb-4">{step.description}</p>
                    <ul className="text-sm text-left space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 max-w-2xl mx-auto">
          <CardContent className="pt-6 pb-6">
            <h4 className="text-xl font-medium mb-4">My Design Philosophy</h4>
            <p className="text-foreground/70">
              I believe that great design is not just about aesthetics, but about creating meaningful experiences that
              solve real problems. I approach each project with empathy for users, attention to detail, and a commitment
              to creating accessible, inclusive designs that delight users while meeting business objectives.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

