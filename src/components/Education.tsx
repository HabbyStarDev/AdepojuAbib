import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiBookOpen, FiStar } from "react-icons/fi";

const Education = () => {
  const education = [
     {
      degree: "B.Sc Human Anatomy",
      institution: "The Federal University of Technology Akure (FUTA) ",
      period: "2015 – 2019",
      status: "Completed",
      description:
        "Higher Institution / College",
      achievements: [
        "Bachelor of Science",
      ],
      technologies: [
        "Applied Sciences",
         "Computing & Information Technology",
      ],
    },
    {
      degree: "MERN Stack Development & Deployment",
      institution: "Self-Paced Learning & Personal Projects",
      period: "2022 – Present",
      status: "Mastered",
      description:
        "Comprehensive Full Stack development program focusing on modern web & Mobile technologies.",
      achievements: [
        "Mastered React ecosystem with TypeScript",
        "Mastered ReactNative  ecosystem",
        "Built production-ready Node.js applications",
        "Deployed applications on Vercel and Netlify",
        "Implemented authentication and authorization systems",
      ],
      technologies: [
        "React",
        "ReactNative",
        "Node.js",
        "MongoDB",
        "Express",
        "TypeScript",
        "Deployment",
      ],
    },
    {
      degree: "Database Engineering & Data Analysis",
      institution: "Self-Paced Learning & Personal Projects",
      period: "2023 – Present",
      status: "Mastered",
      description:
        "Extensive learning of Databases & Data analysis Tools.",
      achievements: [
        "Schema Design",
        "Database Migrations, Optimization & Indexing",
        "collection, cleaning, Analysing and Visualization of Data",
      ],
      technologies: [
        "MySQL",
        "PostgreSQL",
        "Microsoft Excel",
        "Snowflake",
        "Microsoft Power BI",
        "Python",
        "Pandas",
        "NumPy",
      ],
    },
  ];

  const certifications = [
    {
      title: "Full Stack Software Development",
      issuer: "Personal Achievement",
      date: "2022",
      description:
        "Demonstrated expertise in building complete web & Mobile applications from frontend to backend.",
    },
    {
      title: "React Developer",
      issuer: "Self-Certified",
      date: "2022",
      description:
        "Advanced knowledge of React ecosystem, hooks, context, and modern patterns.",
    },
    {
      title: "Node.js Backend Developer",
      issuer: "Self-Certified",
      date: "2022",
      description:
        "Expertise in building scalable backend services with Node.js and Express.",
    },
    {
      title: "Database Design Specialist",
      issuer: "Self-Certified",
      date: "2023",
      description:
        "Proficient in designing and optimizing database schemas for various applications.",
    },
      {
      title: "Data Analysis Specialist",
      issuer: "Self-Certified",
      date: "2023",
      description:
        "Proficient in collection, cleaning, Analysing and Visualization of Data.",
    },
  ];

  return (
    <section id='education' className='py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl gradient-text md:text-5xl font-bold mb-6'>
            <span className='gradient-text'>Education</span>{" "}
            <span className='gradient-text'>
              & Certifications
            </span>
          </h2>
          <p className='max-w-3xl mx-auto'>
            My learning journey and professional certifications
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold  mb-8 flex items-center'>
              <FiBookOpen className='w-6 h-6 mr-3 text-blue-500' />
              Education
            </h3>

            <div className='space-y-8'>
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${edu.degree}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='glass p-6 rounded-xl hover:scale-105 transition-all duration-300 relative'
                >
                  {/* Status Badge */}
                  <div className='absolute top-4 right-4'>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        edu.status === "Completed"
                          ? "bg-green-100 text-green-700  dark:text-green-400"
                          : "bg-blue-100 text-blue-700  dark:text-blue-400"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className='pr-20'>
                    <h4 className='text-lg font-bold  mb-2'>
                      {edu.degree}
                    </h4>

                    <div className='flex items-center text-blue-500  mb-4'>
                      <FiCalendar className='w-4 h-4 mr-2' />
                      <span className='text-sm'>{edu.period}</span>
                    </div>


                    <p className='text-yellow-400  text-sm mb-1'>
                      {edu.description}
                    </p>
                    <p className=' font-bold mb-4'>
                      {edu.institution}
                    </p>

                    {/* Achievements */}
                    <div className='mb-4'>
                      <ul className='space-y-1'>
                      <h5 className='text-sm  text-yellow-400  mb-2 flex items-center'>
                        <FiStar className='w-4 h-4 mr-2 text-yellow-500' />
                        Key Achievements:
                      </h5>
                        {edu.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className='text-sm font-bold flex items-start'
                            >
                              <span className='w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0' />
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className='text-sm text-yellow-400 mb-2'>
                        Technologies Learned:
                      </h5>
                      <div className='flex flex-wrap gap-1'>
                        {edu.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='px-2 py-1 font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold mb-8 flex items-center'>
              <FiAward className='w-6 h-6 mr-3 text-purple-500' />
              Certifications
            </h3>

            {/* certification */}
            <div className='space-y-6'>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='glass p-6 rounded-xl hover:scale-105 transition-all duration-300'
                >
                  <div className='flex items-start justify-between mb-3'>
                    <div>
                      <h4 className='text-lg font-bold  mb-1'>
                        {cert.title}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400 font-medium'>
                        {cert.issuer}
                      </p>
                    </div>
                    <span className='px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-xs font-semibold rounded-full'>
                      {cert.date}
                    </span>
                  </div>

                  <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='mt-8'
            >
              <div className='glass p-6 rounded-xl'>
                <h4 className='text-lg font-bold text-gray-800 dark:text-white mb-4'>
                  Continuous Learning
                </h4>
                <p className=' font-bold text-sm mb-4'>
                  I believe in continuous learning and staying up-to-date with
                  the latest technologies and best practices in software
                  development.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    { skill: "Web Development", progress: 95 },
                    { skill: "Problem Solving", progress: 90 },
                    { skill: "Team Collaboration", progress: 90 },
                    { skill: "Code Quality", progress: 90 },
                  ].map((item, index) => (
                    <div key={item.skill}>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className=''>
                          {item.skill}
                        </span>
                        <span className='text-gray-500 dark:text-gray-400'>
                          {item.progress}%
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1'>
                        <motion.div
                          className='h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
