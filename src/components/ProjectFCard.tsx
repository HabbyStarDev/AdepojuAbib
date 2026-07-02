import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import LazyImage from "./LazyImage";
import type { ProjectFCardProps } from "../interface/types";

function ProjectFCard({ project, openModal, index }: ProjectFCardProps) {
  console.log(project)
  return (
    <>
      <motion.div
        key={project?.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group hover:shadow-2xl cursor-pointer ${
          project.featured ? "ring-2 ring-blue-500/50 shadow-2xl" : ""
        }`}
        onClick={() => openModal(project)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(project);
          }
        }}
        role='button'
        tabIndex={0}
        aria-label={`View details for ${project.title} project`}
      >
        {/* Project Image */}
        <div className='relative overflow-hidden h-48'>
          <LazyImage
            src={project.image}
            alt={`${project.title} project screenshot`}
            className='group-hover:scale-110 transition-transform duration-300'
          />
          {project.featured && (
            <div className='absolute top-4 left-4'>
              <span className='px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full'>
                Featured
              </span>
            </div>
          )}
          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
        </div>

        {/* Project Content */}
        <div className='p-8'>
          <div className='flex items-center justify-between mb-4'>
            <span className='px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-full'>
              {project.category}
            </span>
            {!project.githubUrl ? <span>NDA</span> :
            <div className='flex space-x-3'>
              <motion.a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 glass rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className='w-5 h-5' />
              </motion.a>
              <motion.a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 glass rounded-xl text-gray-600 dark:text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink className='w-5 h-5' />
              </motion.a>
            </div>}
          </div>

          <h3 className='text-2xl font-bold  mb-4 group-hover:text-gradient transition-all duration-300 leading-tight'>
            {project.title}
          </h3>

          <p className=' text-base leading-relaxed mb-6'>
            {project.description}
          </p>

          {/* Technologies */}
          <div className='flex flex-wrap gap-3'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30  text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-200'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectFCard;
