import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FiMail,
      href: "mailto:Abibadepoju@gmail.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Full Stack App Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Optimization",
    "Performance Tuning",
    "API Development",
  ];

  return (
    <footer className='relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:col-span-2'
          >
            <div className='mb-6'>
              <h3 className='text-2xl font-bold gradient-text font-poppins mb-2'>
                ADEPOJU ABIB ADEKOLA
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Full Stack Software Engineer
              </p>
            </div>

            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
              Passionate about creating exceptional digital experiences with
              modern web technologies. Always learning, always building, always
              improving.
            </p>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-3 glass rounded-lg text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className='w-5 h-5' />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className='text-lg font-bold text-gray-800 dark:text-white mb-4'>
              Services
            </h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className='text-lg font-bold text-gray-800 dark:text-white mb-4'>
              Services
            </h4>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-gray-600 dark:text-gray-400 text-sm'
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='glass p-6 rounded-xl mb-8'
        >
          <div className='grid md:grid-cols-3 gap-6 text-center'>
            <div>
              <h5 className='font-semibold text-gray-800 dark:text-white mb-1'>
                Location
              </h5>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Abuja, Nigeria
              </p>
            </div>
            <div>
              <h5 className='font-semibold text-gray-800 dark:text-white mb-1'>
                Email
              </h5>
              <a
                href='mailto:Abibadepoju@gmail.com'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm'
              >
                Abibadepoju@gmail.com
              </a>
            </div>
            <div>
              <h5 className='font-semibold text-gray-800 dark:text-white mb-1'>
                Phone
              </h5>
              <a
                href='tel:+2348101827175'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm'
              >
                +234 810 182 7175
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700'
        >
          <div className='flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0'>
            <span>
              © {currentYear} Adepoju Abib Adekola. Made with React & TypeScript
            </span>
          </div>

          <div className='flex items-center space-x-6'>
            {/* <span className='text-gray-600 dark:text-gray-400 text-sm'>
              Available for freelance work
            </span> */}

            <motion.button
              onClick={scrollToTop}
              className='p-3 glass rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUp className='w-5 h-5' />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl'
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl'
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
