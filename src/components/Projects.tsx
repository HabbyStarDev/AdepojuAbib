import { useState } from "react";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import ProjectModal from "./ProjectModal";
import ProjectFCard from "./ProjectFCard";
//import newsletImage from "../assets/newslet.png";
//import jobtrackerImage from "../assets/jobtracker.png";
import bankImage from "../assets/starbank.png";
import containerImage from "../assets/containerhouse.png";
import foodImage from "../assets/starfood.png";
import visibuyImage from "../assets/starmart.png";
import mylinktreeImage from "../assets/LinktreeLandingPage.png";
import myportfolioImage from "../assets/portfolio.png";
import salesImage from "../assets/sales.jpg";
import moviesImage from "../assets/movies.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    /* {
      title: "JobTracker - Job application tracker",
      description: "A beautiful, real-time job application dashboard, analytics, and secure authentication. Built to help developers never miss an opportunity and tracker applied jobs.",
      longDescription: "JobTracker is a modern, production-ready Full Stack web application that helps developers and job seekers organize, track, and analyze their entire job hunt in one place.Built with the latest Next.js 16 App Router and TypeScript, it delivers blazing-fast performance, server-side rendering, and a flawless user experience on both desktop and mobile. The entire UI is crafted with Tailwind CSS for pixel-perfect, responsive design and includes dark mode support out of the box",
      image: jobtrackerImage,
      technologies: ["Nextjs", "PostgreSQL", "Prisma", "JWT", "NextAuth"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      liveUrl: "https://job-tracker-v-one.vercel.app",
      category: "Web App",
      featured: false,
      date: "Dec 2025",
      challenges: [
        "Building a scalable Nextjs architecture",
        "Integrating DB queries with Prisma",
        "Optimizing database queries for better performance",
      ],
      features: [
        "User registration and authentication",
        "Adding jobs entry for easy monitoring",
        "Real-time analytics",
        "Search and filtering capabilities",
        "Responsive design for all devices",
      ],
    }, */
    /* {
      title: "NewsLet - Full Stack News App",
      description:
        "A comprehensive news application with JWT authentication, role-based access, and REST APIs. Built with Node.js, Express, MongoDB backend and React/Tailwind frontend.",
      longDescription:
        "NewsLet is a full-featured news platform that allows users to read, create, and manage news articles. The application features secure user authentication, role-based access control, and a comprehensive admin dashboard for content management.",
      image: newsletImage,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Tailwind",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Web App",
      featured: false,
      date: "2025",
      challenges: [
        "Implementing secure JWT authentication with refresh tokens",
        "Building a scalable REST API architecture",
        "Managing real-time content updates",
        "Optimizing database queries for better performance",
      ],
      features: [
        "User registration and authentication",
        "Role-based access control (User/Admin)",
        "Article creation and management",
        "Real-time notifications",
        "Search and filtering capabilities",
        "Responsive design for all devices",
      ],
    }, */
     {
      title: "StarBank App",
      description:
        "A Banking App Built with Node.js + Express backend with OTP login, JWT authentication, and RBAC..",
      image:
      bankImage,
      technologies: ["HTML","JavaScript","CSS","Node.js", "Express", "JWT", "OTP"],
      githubUrl: "https://github.com/HabbyStarDev/StarBank",
      liveUrl: "https://habbystardev.github.io/StarBank/",
      category: "Web App",
      featured: false,
    },
    {
      title: "StarMart - eCommerce Platform",
      description:
        "Responsive eCommerce platform built with React, TypeScript, and TailwindCSS. Features Redux Toolkit for state management and cart persistence.",
      image: 
        visibuyImage,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Redux",
        "REST APIs",
        "FlutterWave",
      ],
      githubUrl: "https://github.com/HabbyStarDev/StarMart",
      liveUrl: "https://habbystardev.github.io/StarMart/",
      category: "Web App",
      featured: false,
    },
    {
      title: "StarFood - Restaurant Website",
      description:
        "A Stunning restaurant website. Showcases menu items with responsive design and interactive features.",
      image:
        foodImage,
      technologies: ["JavaScript", "PostgreSQL", "JWT", "Payment API", "REST APIs"],
      githubUrl: "https://github.com/HabbyStarDev/StarFood",
      liveUrl: "https://habbystardev.github.io/StarFood/",
      category: "Web App",
      featured: false,
    },
    {
      title: "ContainerHome - Real Estate Website",
      description:
        "A simple real estate website built with HTML, CSS, and JavaScript. Showcases container homes with responsive design and interactive features.",
     image:
      containerImage,
     technologies: [
        "HTML",
        "JavaScript",
        "CSS",
      ],
     githubUrl: "https://github.com/HabbyStarDev/ContainerHome",
     liveUrl: "https://habbystardev.github.io/containerhome/",
      category: "Web App",
      featured: false,
    },
     {
      title: "linktree Page - Personal Links",
      description:
        "Simple site to group all my profiles on social networks in one place. A free Linktree alternative. Built with React, TypeScript, and Tailwind CSS.",
      image: mylinktreeImage,
      technologies: [
        "HTML",
        "JavaScript",
        "CSS",
      ],
      githubUrl: "https://github.com/HabbyStarDev/Linktree",
      liveUrl: "https://habbystardev.github.io/Linktree/",
      category: "Web App",
      featured: false,
    },   
    {
      title: "Personal Portfolio",
      description:
        "Modern, sophisticated portfolio website with glass morphism design system and pastel gradient aesthetic. Built with React, TypeScript, and Tailwind CSS.",
      image: myportfolioImage,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
        "Glass Morphism",
      ],
      githubUrl: "https://github.com",
      // liveUrl: "https://example.com",
      category: "Web App",
      featured: false,
    },
        {
      title: "Power BI Sales dashboard",
      description:
        "Designed a power Bi dashboard for Madhav Store to track and analyze the online sales data.",
      image: salesImage,
      technologies: [
        "Microsoft Power BI",
      ],
      githubUrl: "https://github.com/HarbyStarDev/Madhav_Store_Dashboard/blob/main/Madhav%20Store%20dashboard.jpg",
      // liveUrl: "https://example.com",
      category: "Database & Data Analysis",
      featured: false,
    },
        {
      title: "Analyzing Movies Database",
      description:
        "Movies Database using SQL & analyzing top 5 ratings.",
      image: moviesImage,
      technologies: [
        "MySQL",
        "Microsoft Excel",
      ],
      githubUrl: "https://github.com/HarbyStarDev/MoviesAnalysis",
      // liveUrl: "https://example.com",
      category: "Database & Data Analysis",
      featured: false,
    },
  ];

  const categories = ["All", "Web App", "Mobile App", "Database & Data Analysis", /*"blockchain"*/];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id='projects' className='py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-block mb-6'
          >
            <h2 className='text-5xl md:text-6xl font-bold'>
              <span className='text-gradient'>Featured</span>{" "}
              <span className='text-gradient'>Projects</span>
            </h2>
            <div className='w-32 h-1 bg-gradient-primary rounded-full mx-auto mt-4' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-xl max-w-4xl mx-auto leading-relaxed'
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-4 mb-12'
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 bg-cyan-400/20 font-bold  rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary  shadow-lg"
                  : "font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredProjects.map((project, index) => (
            <ProjectFCard
              key={project.title}
              project={project}
              index={index}
              openModal={() => openModal(project)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='glass p-8 rounded-xl max-w-2xl mx-auto'>
            <FiCode className='w-12 h-12 text-blue-500 mx-auto mb-4' />
            <h3 className='text-2xl font-bold  mb-4'>
              Interested in working together?
            </h3>
            <p className='mb-6'>
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className='px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
