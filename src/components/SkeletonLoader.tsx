import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular" | "card" | "hero";
  lines?: number;
}

const SkeletonLoader = ({
  className = "",
  variant = "rectangular",
  lines = 3,
}: SkeletonLoaderProps) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700 animate-pulse";

  const variants = {
    text: (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} h-4 rounded ${
              index === lines - 1 ? "w-3/4" : "w-full"
            }`}
          />
        ))}
      </div>
    ),
    rectangular: (
      <div className={`${baseClasses} w-full h-full rounded ${className}`} />
    ),
    circular: <div className={`${baseClasses} rounded-full ${className}`} />,
    card: (
      <div className={`space-y-4 ${className}`}>
        <div className={`${baseClasses} h-48 rounded-lg w-full`} />
        <div className='space-y-2'>
          <div className={`${baseClasses} h-4 rounded w-3/4`} />
          <div className={`${baseClasses} h-4 rounded w-1/2`} />
        </div>
      </div>
    ),
    hero: (
      <div className={`space-y-6 ${className}`}>
        <div className={`${baseClasses} h-16 rounded w-3/4 mx-auto`} />
        <div className={`${baseClasses} h-6 rounded w-1/2 mx-auto`} />
        <div className='space-y-2'>
          <div className={`${baseClasses} h-4 rounded w-full`} />
          <div className={`${baseClasses} h-4 rounded w-5/6`} />
          <div className={`${baseClasses} h-4 rounded w-4/6`} />
        </div>
        <div className='flex justify-center space-x-4'>
          <div className={`${baseClasses} h-12 w-32 rounded-full`} />
          <div className={`${baseClasses} h-12 w-32 rounded-full`} />
        </div>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {variants[variant]}
    </motion.div>
  );
};

export default SkeletonLoader;
