import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiGlobe, FiTool } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SkillsVisualization = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiGlobe,
      color: "from-blue-500 ",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 25 },
        // { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: FiDatabase,
      color: "none",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 25 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: FiTool,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", level: 25 },
        // { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "Github", level: 90 },
        { name: "CI/CD", level: 25 },
        // { name: "Linux", level: 85 },
      ],
    },
    {
      title: "Mobile Development",
      icon: FiCode,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: 35 },
        // { name: "Flutter", level: 75 },
        // { name: "iOS", level: 70 },
        { name: "Android", level: 35 },
        // { name: "PWA", level: 85 },
      ],
    },
  ];

  return (
    <section id='skills-viz' className='py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 dark:from-purple-900/5 dark:to-blue-900/5' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <ScrollReveal direction='up' className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-block mb-6'
          >
            <h2 className='text-5xl md:text-6xl font-bold'>
              <span className='text-gradient'>Skills</span>{" "}
              <span className='text-gray-800 dark:text-white'>Overview</span>
            </h2>
            <div className='w-32 h-1 bg-gradient-primary rounded-full mx-auto mt-4' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
              delay={categoryIndex * 0.1}
              className='glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/20'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div
                  className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}
                >
                  <category.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-white'>
                  {category.title}
                </h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className='relative'
                  >
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-medium text-gray-700 '>
                        {skill.name}
                      </span>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {/* {skill.level}% */}
                      </span>
                    </div>

                    <div /* className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2' */>
                      <motion.div
                       /*  className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         transition={{ duration: 1, delay: skillIndex * 0.1 }}
                         viewport={{ once: true }} */
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <ScrollReveal direction='up' delay={0.3} className='mt-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-8'>
              Additional Technologies
            </h3>
            <div className='flex flex-wrap justify-center gap-3'>
              {[
                // "GraphQL",
                "REST APIs",
                // "Microservices",
                // "Serverless",
                // "WebSockets",
                "JWT",
                "OAuth",
                "Flutterwave",
                // "Stripe",
                // "PayPal",
                // "Firebase",
                // "Supabase",
                "Vercel",
                "Netlify",
                "Heroku",
                // "Kubernetes",
                // "Jenkins",
                "Jest",
                // "Cypress",
                // "Webpack",
                "Vite",
                "ESLint",
                "Prettier",
                // "Figma",
                // "Adobe XD",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className='px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-lg hover:scale-105 transition-transform duration-200'
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsVisualization;
