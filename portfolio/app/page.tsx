"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Moon, Sun, Linkedin, Github, Code, Database, FileCode, Figma, Globe, Laptop, Layers, Smartphone, Tablet, Piano } from "lucide-react"
import { useTheme } from "next-themes"
import { FocusCards } from "@/components/ui/focus-cards"
import { FlipWords } from "@/components/ui/flip-words"
import { motion } from "framer-motion"
import { ThemeProvider } from "next-themes"

const icons = [
  { Icon: Code, name: "Code" },
  { Icon: Database, name: "Databases" },
  { Icon: Figma, name: "Figma" },
  { Icon: Github, name: "GitHub" },
  { Icon: Globe, name: "Web" },
  { Icon: Piano, name: "Piano" },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  const [duplicatedIcons, setDuplicatedIcons] = useState(icons)

  useEffect(() => {
    setMounted(true)
    setDuplicatedIcons([...icons, ...icons])
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'kpi', 'experience', 'impact', 'faq']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const kpiData = [
    { label: "Years Experience", value: "10+" },
    { label: "People Led", value: "100+" },
    { label: "Products Built", value: "8" },
    { label: "Industries Served", value: "10+" },
  ]

  const impactCards = [
    { title: "Product Management", subtitle: "Driving innovation and growth", src: "/images/pm-p-1600.webp" },
    { title: "Software Development", subtitle: "Building scalable solutions", src: "/images/build-p-1600.webp" },
    { title: "Data Science", subtitle: "Unlocking insights from data", src: "/images/ds-p-1080.webp" },
    { title: "Public Speaking", subtitle: "Sharing knowledge and inspiration", src: "/images/talks-p-1600.webp" },
  ]

  const faqItems = [
    { question: "What skills do you bring to the table?", answer: "I specialize in model prototyping, efficiently bringing product ideas to life through quick model building and user testing. I also excel in development, building robust teams capable of delivering scalable software solutions and data models. Additionally, I create visually stunning and user-centric designs for digital products, enhancing user experience and engagement." },
    { question: "Can you tell me about your professional experience?", answer: "I've worked across Australia, Switzerland, and Budapest, and lived in Italy and the UK. My career spans product management, data science, financial expertise in trading, and management consulting. I've worked across various industries including digital consulting, pharmaceuticals, energy, higher education, digital marketing, sales, and HR." },
    { question: "Why did you choose to focus on data science?", answer: "My inclination towards analytical subjects naturally led me to data science. With a strong background in mathematics, finance, economics, and econometrics, data science provided the perfect platform to combine these skills and apply them in meaningful ways." },
    { question: "What are you currently working on?", answer: "I'm currently focused on revolutionizing consulting. Drawing from my extensive experience in leading teams and driving digital transformations, I'm working on developing the best product in the market that aims to create a large-scale impact on the industry." },
  ]

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <Head>
          <title>Milan Nguyen - Digital Leader</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
          <div className="flex justify-between">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-6 py-3">
              <ul className="flex space-x-4">
                {['Home', 'Experience', 'Impact', 'FAQ'].map((item) => (
                  <li key={item}>
                    <Button
                      variant="ghost"
                      className={`text-sm font-medium ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}
                      onClick={() => scrollToSection(item.toLowerCase())}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-6 py-3 flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === 'dark' ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  )
                )}
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/milan-nguyen/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="default" size="sm" asChild>
                <a href="mailto:milan@nmilan.com">E-mail</a>
              </Button>
            </div>
          </div>
        </nav>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl h-[100px] mb-8">
                    <span className="block mb-4">Hi, I'm <span className="text-[#296e83]">Milan</span>, a</span>
                    <FlipWords
                      words={["Product Manager", "Data Scientist", "Digital Leader"]}
                      className="text-[#296e83] -ml-2"
                    />
                  </h1>
                  <br />
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                  Unlocking impact and driving growth through data-driven product management
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button asChild size="lg">
                      <a href="https://www.linkedin.com/in/milan-nguyen/" target="_blank" rel="noopener noreferrer">
                        Contact Me
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => scrollToSection('experience')}>
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/web3-p-1080.webp"
                    alt="Profile image"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="kpi" className="w-screen py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 shadow-lg -mx-[calc((100vw-100%)/2)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {kpiData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-[#296e83] mb-2">{item.value}</div>
                    <div className="text-gray-600 dark:text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full overflow-hidden py-12">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
              style={{ width: "100%" }}
            >
              {duplicatedIcons.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-8"
                  style={{ minWidth: "100px" }}
                >
                  <item.Icon className="w-12 h-12 text-primary" aria-hidden="true" />
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <section id="experience" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-left">Experience</h2>
            <div className="w-full max-w-[calc(100%-12rem)] mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A McKinsey Engagement Manager with professional experience from multiple countries working in digital consulting, product engineering, data science and software development, focusing on innovation, solution design, agile transformations, process automation and financial positions. 
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Awarded public speaker with advanced proficiency in mathematics, programming, machine learning and quantitative finance with a history in the oil and energy, pharma, higher education, human resources, digital marketing and sales industries.
              </p>
            </div>
          </section>

          <section id="impact" className="py-16">
            <h2 className="text-2xl font-bold mb-8 text-left">Impact</h2>
            <div className="w-full">
              <FocusCards cards={impactCards} />
            </div>
          </section>

          <section id="faq" className="py-16 flex items-center justify-center">
            <div className="w-full max-w-[calc(100%-12rem)] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-8 text-left">Common Queries Answered</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-base text-left justify-between">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-left">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  )
}
