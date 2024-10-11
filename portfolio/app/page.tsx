"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Moon,
  Sun,
  Linkedin,
  Github,
  Code,
  Database,
  FileCode,
  Figma,
  Globe,
  Laptop,
  Layers,
  Smartphone,
  Tablet,
  Piano,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import { FocusCards } from "@/components/ui/focus-cards";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

const icons = [
  { Icon: Github, name: "GitHub" },
  { Icon: Database, name: "Databases" },
  { src: "/icons/light_mode/python-plain.svg", darkSrc: "/icons/dark_mode/python-plain.svg", name: "Python" },
  { Icon: Figma, name: "Figma" },
  { src: "/icons/light_mode/jira-plain.svg", darkSrc: "/icons/dark_mode/jira-plain.svg", name: "Jira" },
  { Icon: Piano, name: "Piano" },
  { src: "/icons/light_mode/aftereffects-plain.svg", darkSrc: "/icons/dark_mode/aftereffects-plain.svg", name: "After Effects" },
  { src: "/icons/light_mode/flask-original.svg", darkSrc: "/icons/dark_mode/flask-original.svg", name: "Flask" },
  { Icon: Globe, name: "Web" },
  { src: "/icons/light_mode/jupyter-plain-wordmark.svg", darkSrc: "/icons/dark_mode/jupyter-plain-wordmark.svg", name: "Jupyter" },
  { src: "/icons/light_mode/pandas-original.svg", darkSrc: "/icons/dark_mode/pandas-original.svg", name: "Pandas" },
  { Icon: Code, name: "Code" },
  { src: "/icons/light_mode/premierepro-plain.svg", darkSrc: "/icons/dark_mode/premierepro-plain.svg", name: "Premiere Pro" },
  { src: "/icons/light_mode/pytorch-original.svg", darkSrc: "/icons/dark_mode/pytorch-original.svg", name: "PyTorch" },
  { src: "/icons/light_mode/sqlite-plain.svg", darkSrc: "/icons/dark_mode/sqlite-plain.svg", name: "SQLite" },
  { src: "/icons/light_mode/vscode-original.svg", darkSrc: "/icons/dark_mode/vscode-original.svg", name: "VS Code" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const [duplicatedIcons, setDuplicatedIcons] = useState(icons);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDuplicatedIcons([...icons, ...icons]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "kpi", "experience", "impact", "faq"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, additionalOffset: number = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -25 - additionalOffset;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const kpiData = [
    { label: "Years Experience", value: "10+" },
    { label: "People Led", value: "100+" },
    { label: "Products Built", value: "8" },
    { label: "Industries Served", value: "10+" },
  ];

  const impactCards = [
    {
      title: "Product Management",
      subtitle:
        "Extensive experience in product management with a proven track record: development of a cost engineering BI tool with over 1000 corporate users, a 1M USD/yr enterprise SAAS, or an asset-based consulting tool, merging UI and UX efforts with rapid prototypes, coordinating workstreams from in-house app development through service blueprint creation and architectural planning.",
      src: "/images/pm-p-1600.webp",
    },
    {
      title: "Digital Business Building",
      subtitle:
        "Built teams of 20+ people for product development, coordinated design teams, and led teams of consultants to shape the long-term transformation strategy of a higher education institution. Managed multiple cross-functional agile teams of 6-10 people developing and designing enterprise-scale digital solutions.",
      src: "/images/build-p-1600.webp",
    },
    {
      title: "Data & Analytics",
      subtitle:
        "Managed the development of advanced analytics tools, BI tools, optimized quality control scheduling models in Python, being responsible for data analytics strategy, driving the development of intelligent solutions with AI, ML. Implemented data mining algorithms and automated processes for HR startups. Built portfolio optimization models for energy trading.",
      src: "/images/ds-p-1080.webp",
    },
    {
      title: "Talks & Lectures",
      subtitle:
        "Awarded for delivering the best speech in a Carpathian Basin-wide Rhetorics Competition, highlighting exceptional ability to effectively communicate ideas and thoughts to a diverse audience. Public speaking skills expertly honed through years of experience in delivering engaging, informative, and persuasive speeches for various events, conferences and workshops.",
      src: "/images/talks-p-1600.webp",
    },
  ];

  const faqItems = [
    {
      question: "What skills do you bring to the table?",
      answer:
        "I specialize in model prototyping, efficiently bringing product ideas to life through quick model building and user testing. I also excel in development, building robust teams capable of delivering scalable software solutions and data models. Additionally, I create visually stunning and user-centric designs for digital products, enhancing user experience and engagement.",
    },
    {
      question: "Can you tell me about your professional experience?",
      answer:
        "I've worked across Australia, Switzerland, and Budapest, and lived in Italy and the UK. My career spans product management, data science, financial expertise in trading, and management consulting. I've worked across various industries including digital consulting, pharmaceuticals, energy, higher education, digital marketing, sales, and HR.",
    },
    {
      question: "Why did you choose to focus on data science?",
      answer:
        "My inclination towards analytical subjects naturally led me to data science. With a strong background in mathematics, finance, economics, and econometrics, data science provided the perfect platform to combine these skills and apply them in meaningful ways.",
    },
    {
      question: "What are you currently working on?",
      answer:
        "I'm currently focused on revolutionizing consulting. Drawing from my extensive experience in leading teams and driving digital transformations, I'm working on developing the best product in the market that aims to create a large-scale impact on the industry.",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <Head>
          <title>Milan Nguyen - Digital Leader</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
          <div className="flex justify-between space-x-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-4 py-2 sm:px-6 sm:py-3 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <ul className="hidden md:flex space-x-4">
                {["Milan Nguyen", "Experience", "Impact", "FAQ"].map((item) => (
                  <li key={item}>
                    <Button
                      variant="ghost"
                      className={`text-sm font-medium ${
                        activeSection ===
                        (item === "Milan Nguyen" ? "home" : item.toLowerCase())
                          ? "text-[#296e83]"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                      onClick={() =>
                        scrollToSection(
                          item === "Milan Nguyen" ? "home" : item.toLowerCase()
                        )
                      }
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-4 py-2 sm:px-6 sm:py-3 flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {mounted &&
                  (theme === "dark" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ))}
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/milan-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="default" size="sm" asChild>
                <a href="mailto:me@nmilan.com">E-mail</a>
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-4 py-2">
              <ul className="flex flex-col space-y-2">
                {["Milan Nguyen", "Experience", "Impact", "FAQ"].map((item) => (
                  <li key={item}>
                    <Button
                      variant="ghost"
                      className={`text-sm w-full justify-start ${
                        activeSection ===
                        (item === "Milan Nguyen" ? "home" : item.toLowerCase())
                          ? "text-[#296e83]"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                      onClick={() => {
                        scrollToSection(
                          item === "Milan Nguyen" ? "home" : item.toLowerCase()
                        );
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-24 sm:pt-0"
          >
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
                    <span className="block sm:mb-4">
                      <span className="sm:hidden"><br /></span>
                      Hi, I'm <span className="text-[#296e83]">Milan</span>, a
                    </span>
                    <FlipWords
                      words={[
                        "Product Manager",
                        "Data Scientist",
                        "Digital Leader",
                      ]}
                      className="text-[#296e83] dark:text-[#296e83] -ml-2"
                    />
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                    Unlocking impact and driving growth through data-driven
                    product management
                  </p>
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a
                        href="https://www.linkedin.com/in/milan-nguyen/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Me
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => scrollToSection("kpi", 75)}
                      className="w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] sm:h-[450px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-xl order-1 md:order-2 mt-0 sm:mt-0">
                  <Image
                    src="/images/web3-p-1080.webp"
                    alt="Profile image"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            id="kpi"
            className="w-screen py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 shadow-lg -mx-[calc((100vw-100%)/2)]"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                {kpiData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#296e83] mb-2">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <br />
          <br />

          <div className="w-full overflow-hidden py-12 relative">
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
              style={{ width: "200%" }}
            >
              {duplicatedIcons.concat(duplicatedIcons).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-8"
                  style={{ minWidth: "100px" }}
                >
                  {item.Icon ? (
                    <item.Icon
                      className="w-12 h-12 text-primary"
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      src={theme === 'dark' ? item.darkSrc : item.src}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="text-primary"
                    />
                  )}
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <section
            id="experience"
            className="py-16 flex items-center justify-center"
          >
            <div className="w-full max-w-full sm:max-w-[calc(100%-2rem)] md:max-w-[calc(100%-12rem)] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-left">Experience</h2>
              <div className="w-full">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  An ex-McKinsey Engagement Manager and Lead Data Scientist with professional experience
                  from multiple countries working in digital consulting, product
                  engineering,{" "}
                  <span className="text-[#296e83] font-bold">
                    data science and software development
                  </span>
                  , focusing on innovation, solution design, agile
                  transformations, process automation and financial positions.
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  <span className="text-[#296e83] font-bold">
                    Awarded public speaker
                  </span>{" "}
                  with advanced proficiency in mathematics, programming,{" "}
                  <span className="text-[#296e83] font-bold">
                    machine learning
                  </span>{" "}
                  and quantitative finance with a history in the oil and energy,
                  pharma, higher education, management consulting, human resources, 
                  digital marketing and sales industries.
                </p>
              </div>
            </div>
          </section>

          <section id="impact" className="py-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Impact</h2>
            <div className="w-full">
              <FocusCards cards={impactCards} />
            </div>
          </section>

          <section id="faq" className="py-16 flex items-top justify-center">
            <div className="w-full max-w-full sm:max-w-[calc(100%-2rem)] md:max-w-[calc(100%-12rem)] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-left">
                Common Queries Answered
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-sm sm:text-base text-left justify-between">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-left">
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
  );
}