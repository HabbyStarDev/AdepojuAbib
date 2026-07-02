import { motion } from "framer-motion";

function CareerHighlight() {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "40%", label: "Performance Improvement" },
    { number: "30%", label: "User Engagement Boost" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='mt-20'
    >
      <div className='glass p-8 rounded-xl'>
        <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center'>
          Career Highlights
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='text-3xl md:text-4xl font-bold gradient-text mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-600 dark:text-gray-400 text-sm'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CareerHighlight;
