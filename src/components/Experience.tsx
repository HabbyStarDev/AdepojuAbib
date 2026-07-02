import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import CareerHighlight from "./CareerHighlight";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "1791 Technology (Contract)",
      period: "2025",
      location: "Remote",
      type: "Contract",
      description: [
        "Built Node.js + Express backend with OTP login, JWT authentication, and RBAC (Role-Based Access Control)",
        "Integrated Kill Bill for multi-tenant billing system and automated provisioning",
        "Added comprehensive audit logs and Postmark/SMTP email notifications",
        "Developed secure REST APIs with improved system reliability and performance",
      ],
      technologies: [
        "Node.js",
        "Express",
        "JWT",
        "OTP",
        "Kill Bill",
        "REST APIs",
        "Audit Logging",
      ],
      achievements: [
        "Improved system reliability by 40%",
        "Implemented secure multi-tenant architecture",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Visibuy (eCommerce Platform)",
      period: "2025",
      location: "Remote",
      type: "Full-time",
      description: [
        "Built responsive eCommerce platform using React (TypeScript) and TailwindCSS",
        "Enhanced state management with Redux Toolkit & Persist for seamless cart persistence",
        "Integrated REST APIs for dynamic product fetching and real-time rendering",
        "Collaborated with design team to implement pixel-perfect UI components",
      ],
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Redux Toolkit",
        "REST APIs",
      ],
      achievements: [
        "Enhanced user experience with persistent cart",
        "Improved page load performance by 25%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "NewsLet (Personal Project)",
      period: "2025",
      location: "Personal",
      type: "Project",
      description: [
        "Developed Full Stack news application with Node.js, Express, MongoDB backend",
        "Implemented JWT authentication with role-based access control system",
        "Built responsive React frontend with TailwindCSS and modern UI components",
        // "Integrated React Query for efficient API state management and caching",
        "Integrated Context API for state management",
      ],
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "TailwindCSS",
        "JWT",
        // "React Query",
        "Context API",
      ],
      achievements: [
        "Built complete authentication system",
        "Implemented efficient data fetching and management",
      ],
    },
    {
      title: "Backend Engineer",
      company: "Techwitclan (BookIt Event System)",
      period: "2024",
      location: "Remote",
      type: "Full-time",
      description: [
        "Developed Django backend with JWT authentication and comprehensive event booking workflows",
        "Designed and implemented PostgreSQL database schemas with optimized queries",
        "Integrated payment processing systems with secure API endpoints",
        "Delivered robust REST APIs with enhanced security and error handling",
      ],
      technologies: [
        "Django",
        "PostgreSQL",
        "JWT",
        "Payment APIs",
        "REST APIs",
        "Database Design",
      ],
      achievements: [
        "Delivered secure payment integration",
        "Optimized database performance by 35%",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "VarryHealth",
      period: "2023–2024",
      location: "Remote",
      type: "Internship",
      description: [
        "Boosted user engagement by 30% through strategic UI/UX optimization using React",
        "Reduced application load time by 40% through performance tuning and code optimization",
        "Integrated API endpoints for faster user interactions and real-time data updates",
        "Collaborated with senior developers to implement responsive design patterns",
      ],
      technologies: [
        "React",
        "Performance Optimization",
        "UI/UX",
        "API Integration",
        "Responsive Design",
      ],
      achievements: [
        "30% increase in user engagement",
        "40% improvement in load times",
      ],
    },
  ];

  return (
    <section id='experience' className='py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='gradient-text'>Work</span>{" "}
            <span className='text-gray-800 dark:text-white'>Experience</span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30' />

          <div className='space-y-12'>
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className='absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 transform -translate-x-1/2' />

                {/* Content Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } w-full`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300'>
                    {/* Header */}
                    <div className='flex flex-wrap items-center gap-3 mb-4'>
                      <span className='px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full'>
                        {experience.type}
                      </span>
                      <div className='flex items-center text-gray-500 dark:text-gray-400 text-sm'>
                        <FiCalendar className='w-4 h-4 mr-1' />
                        {experience.period}
                      </div>
                    </div>

                    <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>
                      {experience.title}
                    </h3>

                    <div className='flex items-center text-gray-600 dark:text-gray-400 mb-4'>
                      <FiBriefcase className='w-4 h-4 mr-2' />
                      <span className='font-semibold'>
                        {experience.company}
                      </span>
                      <FiMapPin className='w-4 h-4 ml-4 mr-1' />
                      <span className='text-sm'>{experience.location}</span>
                    </div>

                    {/* Description */}
                    <ul className='space-y-2 mb-4'>
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + itemIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start'
                        >
                          <span className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0' />
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-700  mb-2'>
                        Technologies Used:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {experience.achievements && (
                      <div>
                        <h4 className='text-sm font-semibold text-gray-700  mb-2'>
                          Key Achievements:
                        </h4>
                        <div className='space-y-1'>
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.div
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay:
                                    index * 0.1 + 0.5 + achievementIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                                className='text-sm text-green-600 dark:text-green-400 font-medium'
                              >
                                ✓ {achievement}
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className='hidden md:block md:w-2/12' />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <CareerHighlight />
      </div>
    </section>
  );
};

export default Experience;
