import { motion } from "framer-motion";
import { FiStar, FiMessageCircle } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emmanuel Worgu",
      role: "Co-founder",
      company: "Visibuy",
      content:
        "Abib delivered exceptional results on our e-commerce platform. His attention to detail and technical expertise helped us achieve a 40% improvement in load times and user engagement.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "1791 Technology.",
      content:
        "Working with Abib was a game-changer for our startup. He built a robust backend system that handles thousands of concurrent users seamlessly. Highly recommended!",
      rating: 4.5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      company: "Visibuy",
      content:
        "Abib's code quality and problem-solving skills are outstanding. He walts into our system and works well with his team mates to build a modern, scalable application that we all are happy with.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5.0 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id='testimonials' className='py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10' />

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
              <span className='text-gradient'>Client</span>{" "}
              <span className='text-gray-800 dark:text-white'>
                Testimonials
              </span>
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
            What clients and colleagues say about working with me
          </motion.p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              direction='up'
              delay={index * 0.1}
              className='glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/20'
            >
              <div className='relative'>
                {/* Quote Icon */}
                <div className='absolute -top-2 -left-2 text-blue-500/30'>
                  <FiMessageCircle className='w-12 h-12' />
                </div>

                {/* Rating */}
                <div className='flex items-center gap-1 mb-6'>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg'>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className='flex items-center gap-4'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full object-cover'
                  />
                  <div>
                    <h4 className='font-semibold text-gray-800 dark:text-white'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal direction='up' delay={0.3} className='text-center mt-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='glass p-8 rounded-2xl max-w-2xl mx-auto'
          >
            <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
              Ready to work together?
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>
              Let's discuss your project and see how we can bring your vision to
              life.
            </p>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className='px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
