'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    description: 'Send me an email and I\'ll respond as soon as possible',
    contact: 'hello@developer.com',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn for professional updates',
    contact: 'linkedin.com/in/developer',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💬',
    title: 'Discord',
    description: 'Chat with me on Discord for quick discussions',
    contact: '@developer#1234',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: '📱',
    title: 'WhatsApp',
    description: 'Quick reach out via WhatsApp messenger',
    contact: '+62 xxx xxx xxxx',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030014]">
      {/* 1. Global Noise Texture */}
      <div className="bg-noise"></div>

      {/* 2. Background Grid & Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]"></div>
        {/* Glow Top Center */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.section
        className="mb-24 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
      </motion.section>

      {/* Main Content */}
      <div className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-700/50 bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Other Ways to Reach Me</h2>

            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all cursor-pointer group`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{method.description}</p>
                    <a
                      href="#"
                      className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white bg-linear-to-r ${method.gradient} hover:shadow-lg transition-all`}
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.section
          className=""
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Follow Me on Social Media</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram', 'YouTube'].map((social, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Quick Response Info */}
        <motion.div
          className="mt-20 p-8 rounded-2xl bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg">
            ⏱️ I typically respond to messages within <span className="font-bold text-purple-300">24 hours</span>. Looking forward to hearing from you!
          </p>
        </motion.div>
      </div>

      </main>
    </div>
  );
}

