import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiCalendar,
  FiTag,
} from "react-icons/fi";
import LazyImage from "./LazyImage";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
  longDescription?: string;
  challenges?: string[];
  features?: string[];
  date?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
          onClick={onClose}
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-title'
          aria-describedby='modal-description'
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className='relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-3xl'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-6 right-6 z-10 p-3 glass rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors'
            >
              <FiX className='w-6 h-6' />
            </button>

            <div className='p-8 md:p-12'>
              {/* Project Header */}
              <div className='mb-8'>
                <div className='flex items-center gap-4 mb-4'>
                  <span className='px-4 py-2 bg-gradient-primary text-white text-sm font-semibold rounded-full'>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className='px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold rounded-full'>
                      Featured
                    </span>
                  )}
                  {project.date && (
                    <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                      <FiCalendar className='w-4 h-4' />
                      <span className='text-sm'>{project.date}</span>
                    </div>
                  )}
                </div>

                <h2
                  id='modal-title'
                  className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'
                >
                  {project.title}
                </h2>

                <div className='flex gap-4'>
                  <motion.a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className='w-5 h-5' />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl hover:shadow-lg transition-all'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className='w-5 h-5' />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Project Image */}
              <div className='mb-8 rounded-2xl overflow-hidden'>
                <LazyImage
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className='w-full h-64 md:h-80 object-cover'
                />
              </div>

              {/* Project Description */}
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-4'>
                    About This Project
                  </h3>
                  <p className='text-gray-600 dark:text-white leading-relaxed mb-6'>
                    {project.longDescription || project.description}
                  </p>

                  {project.challenges && (
                    <div className='mb-6'>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-3'>
                        Key Challenges
                      </h4>
                      <ul className='space-y-2'>
                        {project.challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className='flex items-start gap-2 text-gray-600 dark:text-gray-400'
                          >
                            <div className='w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0' />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  {project.features && (
                    <div className='mb-6'>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-3'>
                        Key Features
                      </h4>
                      <ul className='space-y-2'>
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className='flex items-start gap-2 text-gray-600 dark:text-gray-400'
                          >
                            <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0' />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2'>
                      <FiTag className='w-5 h-5' />
                      Technologies Used
                    </h4>
                    <div className='flex flex-wrap gap-3'>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-lg'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
