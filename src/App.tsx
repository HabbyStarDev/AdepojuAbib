import { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";

import DarkModeToggle from "./components/DarkModeToggle";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PerformanceMonitor from "./components/PerformanceMonitor";
import SEO from "./components/SEO";
import SkeletonLoader from "./components/SkeletonLoader";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
/* const SkillsVisualization = lazy(() => import("./components/SkillsVisualization")
); */
const Projects = lazy(() => import("./components/Projects"));
//onst Testimonials = lazy(() => import("./components/Testimonials"));
//const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ErrorBoundary>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode ? "" : "dark"
        }`}
      >
        <SEO />
        <PerformanceMonitor />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Navbar />

        <main className='relative'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Suspense
              fallback={<SkeletonLoader variant='hero' className='py-20' />}
            >
              <About />
            </Suspense>
            <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <Skills />
            </Suspense>
  {/*           <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <SkillsVisualization />
            </Suspense> */}
            <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <Projects />
            </Suspense>
{/*             <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <Testimonials />
            </Suspense> */}
{/*             <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <Experience />
            </Suspense> */}
            <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <Education />
            </Suspense>
            <Suspense
              fallback={<SkeletonLoader variant='card' className='py-20' />}
            >
              <Contact />
            </Suspense>
          </motion.div>
        </main>

        <Suspense
          fallback={
            <div className='py-10'>
              <SkeletonLoader
                variant='text'
                lines={3}
                className='max-w-4xl mx-auto px-4'
              />
            </div>
          }
        >
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
