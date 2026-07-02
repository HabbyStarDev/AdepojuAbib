import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
    subject: yup
      .string()
      .required("Subject is required")
      .min(5, "Subject must be at least 5 characters"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Store form data in localStorage as JSON
      const mails = JSON.parse(localStorage.getItem("mails") || "[]");
      mails.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem("mails", JSON.stringify(mails));

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "Abibadepoju@gmail.com",
      href: "mailto:Abibadepoju@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+234 810 182 7175",
      href: "tel:+2348101827175",
    },
    {
      icon: FiMapPin,
      label: "Location",
      // value: "Abuja, Nigeria",
      value: "Nigeria",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section id='contact' className='py-20 relative'>
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
            <span className='gradient-text'>Get In</span>{" "}
            <span className='gradient-text'>Touch</span>
          </h2>
          <p className=' max-w-3xl mx-auto'>
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold  mb-4'>
                  Let's Connect
                </h3>
                <p className=' leading-relaxed'>
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className='space-y-4'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='glass p-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center space-x-4 group'
                  >
                    <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                      <info.icon className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='text-sm '>
                        {info.label}
                      </p>
                      <p className='font-semibold '>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className='glass p-6 rounded-xl'
              >
                <h4 className='text-lg font-bold mb-3'>
                  Availability Status
                </h4>
                <div className='flex items-center space-x-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                  <span className='text-green-600 dark:text-green-400 font-medium'>
                    Available for new projects
                  </span>
                </div>
                <p className=' text-sm mt-2'>
                  I typically respond within 24 hours
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='glass p-8 rounded-xl'
            >
              <h3 className='text-2xl font-bold  mb-6'>
                Send a Message
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3'
                >
                  <FiCheck className='w-5 h-5 text-green-600 dark:text-green-400' />
                  <span className='text-green-800 dark:text-green-200'>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3'
                >
                  <FiAlertCircle className='w-5 h-5 text-red-600 dark:text-red-400' />
                  <span className='text-red-800 dark:text-red-200'>
                    Something went wrong. Please try again later.
                  </span>
                </motion.div>
              )}

              <div className='space-y-6'>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium  mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    {...register("name")}
                    className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder='Your full name'
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400 flex items-center'>
                      <FiAlertCircle className='w-4 h-4 mr-1' />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium  mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    {...register("email")}
                    className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder='your.email@example.com'
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400 flex items-center'>
                      <FiAlertCircle className='w-4 h-4 mr-1' />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium  mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    {...register("subject")}
                    className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400 flex items-center'>
                      <FiAlertCircle className='w-4 h-4 mr-1' />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium  mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    rows={6}
                    {...register("message")}
                    className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder='Tell me about your project or just say hello...'
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400 flex items-center'>
                      <FiAlertCircle className='w-4 h-4 mr-1' />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed'
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className='w-5 h-5' />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
