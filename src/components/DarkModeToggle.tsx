import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({
  isDarkMode,
  toggleDarkMode,
}: DarkModeToggleProps) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className='fixed top-20 right-3 sm:right-4 md:right-6 z-50 p-3 rounded-full glass hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
      role='switch'
    >
      <motion.div
        key={isDarkMode ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden='true'
      >
        {isDarkMode ? (
          <FiSun className='w-5 h-5 text-yellow-400' />
        ) : (
          <FiMoon className='w-5 h-5 text-indigo-600' />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
