"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("development")
  const canvasRef = useRef(null)

  const skills = {
    development: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "JavaScript", level: 92, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 90, icon: "🎐" },
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 75, icon: "🚂" },
    ],
    tools: [
      { name: "Git/GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "📝" },
      { name: "Firebase", level: 85, icon: "🔥" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Vercel", level: 90, icon: "▲" },
    ],
    soft: [
      { name: "Communication", level: 95, icon: "🗣️" },
      { name: "Teamwork", level: 90, icon: "👥" },
      { name: "Problem Solving", level: 92, icon: "🧩" },
      { name: "Creativity", level: 95, icon: "💡" },
      { name: "Time Management", level: 85, icon: "⏰" },
      { name: "Adaptability", level: 90, icon: "🔄" },
      { name: "Empathy", level: 95, icon: "❤️" },
      { name: "Critical Thinking", level: 88, icon: "🧠" },
    ],
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = (canvas.width = canvas.offsetWidth)
    const height = (canvas.height = canvas.offsetHeight)
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 3

    const currentSkills = skills[activeTab]
    const angleStep = (Math.PI * 2) / currentSkills.length

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.strokeStyle = "rgba(var(--primary-rgb), 0.1)"
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw radar lines
    for (let i = 0; i < currentSkills.length; i++) {
      const angle = i * angleStep
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
      ctx.strokeStyle = "rgba(var(--primary-rgb), 0.2)"
      ctx.stroke()
    }

    // Draw concentric circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * (i / 5), 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(var(--primary-rgb), 0.1)"
      ctx.stroke()
    }

    // Draw skill levels
    ctx.beginPath()
    for (let i = 0; i < currentSkills.length; i++) {
      const angle = i * angleStep
      const skillLevel = currentSkills[i].level / 100
      const pointX = centerX + Math.cos(angle) * radius * skillLevel
      const pointY = centerY + Math.sin(angle) * radius * skillLevel

      if (i === 0) {
        ctx.moveTo(pointX, pointY)
      } else {
        ctx.lineTo(pointX, pointY)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(var(--primary-rgb), 0.1)"
    ctx.fill()
    ctx.strokeStyle = "rgba(var(--primary-rgb), 0.6)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw skill points
    for (let i = 0; i < currentSkills.length; i++) {
      const angle = i * angleStep
      const skillLevel = currentSkills[i].level / 100
      const pointX = centerX + Math.cos(angle) * radius * skillLevel
      const pointY = centerY + Math.sin(angle) * radius * skillLevel

      ctx.beginPath()
      ctx.arc(pointX, pointY, 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(var(--primary-rgb), 1)"
      ctx.fill()

      // Draw skill labels
      const labelX = centerX + Math.cos(angle) * (radius + 20)
      const labelY = centerY + Math.sin(angle) * (radius + 20)

      ctx.font = "12px sans-serif"
      ctx.fillStyle = "var(--foreground)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(currentSkills[i].name, labelX, labelY)
    }
  }, [activeTab, skills])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
        <h2 className="text-primary font-medium mb-2">What I Know</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          My Skills
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          I've acquired a diverse set of skills throughout my journey as a developer. Here's a comprehensive overview of
          my technical expertise and tools I work with.
        </p>
      </motion.div>

      <Tabs defaultValue="development" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl">
            <TabsTrigger value="development" className="relative">
              Development
              {activeTab === "development" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </TabsTrigger>
            <TabsTrigger value="tools" className="relative">
              Tools
              {activeTab === "tools" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </TabsTrigger>
            <TabsTrigger value="soft" className="relative">
              Soft Skills
              {activeTab === "soft" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </TabsTrigger>
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={activeTab === category ? "visible" : "hidden"}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                {skillList.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h4 className="text-xl font-medium">{skill.name}</h4>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2.5 mb-2 overflow-hidden">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent to-primary/50"></div>
                      </motion.div>
                    </div>

                    <div className="flex justify-between text-sm text-foreground/70">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
      >
        <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
          <h4 className="text-xl font-bold mb-6 text-center">Skills Radar Chart</h4>
          <div className="w-full h-96 relative">
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

