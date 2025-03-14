"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.3 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      alert("Message sent successfully!")
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "vinay.23bcs10083@sst.scaler.com",
      link: "mailto:vinay.23bcs10083@sst.scaler.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 8019148072",
      link: "tel:+918019148072",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      link: "https://maps.google.com/?q=Bengaluru,Karnataka,India",
    },
  ]

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "https://linkedin.com/in/vinayreddy1829/" },
    { icon: <Github className="h-5 w-5" />, name: "GitHub", url: "https://github.com/VinnuReddy18" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "https://twitter.com/vinnn2918" },
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
        <h2 className="text-primary font-medium mb-2">Get In Touch</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Contact Me
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel
          free to reach out to me using the form below or through my social media channels.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4"
                    >
                      <div className="mt-1 group-hover:text-primary transition-colors duration-300">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-foreground/70">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-8" variants={itemVariants}>
            <Card className="overflow-hidden bg-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-primary/10 transition-colors p-3 rounded-full flex items-center justify-center group"
                    >
                      <div className="group-hover:text-primary transition-colors duration-300">{link.icon}</div>
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium text-lg mb-2">Available For</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="font-normal">
                      UI/UX Design
                    </Badge>
                    <Badge variant="outline" className="font-normal">
                      Frontend Development
                    </Badge>
                    <Badge variant="outline" className="font-normal">
                      Consultation
                    </Badge>
                    <Badge variant="outline" className="font-normal">
                      Freelance Projects
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={formRef}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative overflow-hidden group">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium group-focus-within:text-primary transition-colors"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-border focus:border-primary transition-colors"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: formData.name ? "100%" : "0%" } : { width: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </div>

                  <div className="space-y-2 relative overflow-hidden group">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium group-focus-within:text-primary transition-colors"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-border focus:border-primary transition-colors"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: formData.email ? "100%" : "0%" } : { width: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div className="space-y-2 relative overflow-hidden group">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium group-focus-within:text-primary transition-colors"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="border-border focus:border-primary transition-colors"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: formData.subject ? "100%" : "0%" } : { width: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                </div>

                <div className="space-y-2 relative overflow-hidden group">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium group-focus-within:text-primary transition-colors"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    required
                    className="border-border focus:border-primary transition-colors resize-none"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: formData.message ? "100%" : "0%" } : { width: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  />
                </div>

                <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

