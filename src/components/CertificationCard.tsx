import { motion } from "framer-motion";
import type { CertificationCardProps } from "../interface/types";

function CertificationCard({ certifications }: CertificationCardProps) {
  return (
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
              <h4 className='text-lg font-bold text-gray-800 dark:text-white mb-1'>
                {cert.title}
              </h4>
              <p className='text-gray-600 dark:text-gray-400 font-medium'>
                {cert.issuer}
              </p>
            </div>
            <span className='px-2 py-1 bg-purple-100  text-xs font-semibold rounded-full'>
              {cert.date}
            </span>
          </div>

          <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
            {cert.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default CertificationCard;
