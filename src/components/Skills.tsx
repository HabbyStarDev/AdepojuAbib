import { motion } from "framer-motion";
import { FiBarChart, FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { TbBrandReactNative, TbBrandNextjs, TbSql,  } from "react-icons/tb";
import { FaAmazon, FaBootstrap, FaCss3, FaDocker,  FaHtml5, FaSnowflake, FaMicrosoft, FaWordpress} from "react-icons/fa";
import { SiDatagrip, SiDbeaver, SiFlyway, SiGooglebigquery, SiGooglesheets,SiJavascript, SiNumpy, SiPandas, SiPython, SiPostman, SiVite } from "react-icons/si";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiHeroku,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiCode,
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-500",
      skills: [
        { name: "React", icon: SiReact, color: "text-blue-500"  },
        { name: "ReactNative", icon: TbBrandReactNative },
        { name: "Javascript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "NextJs", icon: TbBrandNextjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "WordPress", icon: FaWordpress },
      ],
    },
    {
      title: "Backend Development",
      icon: FiServer,
      gradient: "from-green-500 to-teal-500",
      color: "text-green-500",
      skills: [
        { name: "Node.js",  icon: SiNodedotjs, color: "text-blue-500" },
        { name: "Express.js", icon: SiExpress },
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL",  icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Postman", icon: SiPostman },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: FiTool,
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-500",
      skills: [
        { name: "Git", icon: SiGit, color: "text-blue-500"},
        { name: "GitHub", icon: SiGithub },
        { name: "Redux Toolkit", icon: SiRedux },
        { name: "Docker", icon: FaDocker },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify",  icon: SiNetlify },
        { name: "Heroku",  icon: SiHeroku },
      ],
    },
     {
      title: "Database Design",
      icon: FiDatabase,
      gradient: "from-blue-500 to-pink-500",
      color: "text-cyan-500",
      skills: [
        { name: "MySQL",  icon: SiMysql, color: "text-blue-500" },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Microsoft SQL Server", icon: TbSql },
        { name: "Snowflake", icon: FaSnowflake },
        { name: "Google BigQuery", icon: SiGooglebigquery },
        { name: "DBeaver", icon: SiDbeaver },
        { name: "DataGrip by JetBrains", icon: SiDatagrip },
      ],
    },
     {
      title: "Data Analysis",
      icon: FiBarChart,
      gradient: "from-blue-500 to-orange-500",
      color: "text-orange-500",
      skills: [
        { name: "Microsoft Excel:",  icon: PiMicrosoftExcelLogoBold, color: "text-blue-500" },
        { name: "Google Sheets", icon: SiGooglesheets },
        { name: "Microsoft Power BI", icon: FaMicrosoft },
        { name: "Structured Query Language (SQL)", icon: TbSql },
        { name: "Python", icon: SiPython },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
      ],
    },
  ];

  const technologies = [
    { name: "HTML", icon: FaHtml5 , color: "text-purple-500" },
    { icon: FaCss3, name: "CSS", color: "text-blue-500" },
    { icon: SiVite, name: "Vite", color: "text-blue-600" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-cyan-500" },
    { icon: SiRailway, name: "Railway", color: "text-green-500" },
    { icon: FaWordpress, name: "WordPress", color: "text-blue-500" },
    { icon: SiReact, name: "React", color: "text-blue-500" },
    { name: "ReactNative", icon: TbBrandReactNative , color: "text-purple-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-600" },
    { icon: SiDjango, name: "Django", color: "text-green-600" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { name: "DrawDB", icon: SiDbeaver, color: "text-cyan-500" },
    { name: "Flyway", icon: SiFlyway, color: "text-black" },
    { name: "Amazon Redshift", icon: FaAmazon, color: "text-green-400" },
  ];

  return (
    <section id='skills' className='py-20 relative'>
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
            <span className='gradient-text'>Skills</span>{" "}
            <span className='gradient-text'>& Expertise</span>
          </h2>
          <p className='text-lg  max-w-3xl mx-auto'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className='glass p-6 rounded-xl hover:scale-105 transition-all duration-300'
            >
              <div className='flex items-center mb-6'>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4`}
                >
                  <category.icon className='w-6 h-6 '  />
                </div>
                <h3 className='text-xl font-bold '>
                  {category.title}
                </h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex items-center'>
                        <skill.icon className={`w-5 h-5 mr-3  ${category.color}`} />
                        <span className='font-medium'>
                          {skill.name}
                        </span>
                      </div>
                     {/*  <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {skill.level}%
                      </span> */}
                    </div>
                    {/* <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                        viewport={{ once: true }}
                      />
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h3 className='text-2xl font-bold mb-8'>
            Additional Tools I Work With
          </h3>

          <div className='grid grid-cols-3 font-bold sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6'>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='glass p-4 font-bold rounded-xl hover:scale-110 transition-all duration-300 group'
              >
                <div className='flex flex-col items-center'>
                  <tech.icon
                    className={`w-8 h-8 ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className='text-xs '>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='glass p-8 rounded-xl'>
            <h3 className='text-2xl font-bold mb-6 text-center'>
              Other Skills & Competencies
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  title: "API Development",
                  items: [
                    "REST APIs",
                    /* "GraphQL", */ "Postman",
                    "API Testing",
                  ],
                },
                {
                  title: "Authentication",
                  items: ["JWT", "OTP", "RBAC", "OAuth"],
                },
                {
                  title: "Database Design",
                  items: [
                    "Schema Design",
                    "Migrations",
                    "Optimization",
                    "Indexing",
                  ],
                },
                  {
                  title: "Data Analysis",
                  items: [
                    "Data Collection",
                    "Data Cleaning",
                    "Data Analysis",
                    "Data Visualization",
                  ],
                },
                /* {
                  title: "DevOps",
                  items: ["CI/CD", "Docker", "AWS", "Deployment"],
                }, */
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <h4 className='font-semibold mb-3'>
                    {skillGroup.title}
                  </h4>
                  <ul className='space-y-2'>
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className='text-sm'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
