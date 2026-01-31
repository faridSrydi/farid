'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', icon: '🎨', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'] },
  { category: 'Backend', icon: '⚙️', skills: ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL', 'Microservices'] },
  { category: 'Database', icon: '🗄️', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'MySQL'] },
  { category: 'DevOps', icon: '🐳', skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions', 'Linux'] },
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Senior Fullstack Developer',
    company: 'Tech Startup Inc',
    description: 'Leading development of scalable web applications and mentoring junior developers',
  },
  {
    year: '2021 - 2023',
    title: 'Fullstack Developer',
    company: 'Digital Solutions Co',
    description: 'Built and maintained multiple client projects using modern web technologies',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Developer',
    company: 'Web Agency Pro',
    description: 'Started my journey in web development with HTML, CSS, and JavaScript',
  },
];

export default function AboutPage() {
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
          About Me
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover my journey, skills, and what drives my passion for web development
        </p>
      </motion.section>

      {/* About Content */}
      <motion.section
        className="mb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                My Journey
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Saya memulai perjalanan di dunia web development dengan passion untuk menciptakan solusi yang memberikan dampak. Dengan lebih dari 5 tahun pengalaman, saya telah berkembang dari junior developer menjadi senior fullstack developer.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Saya percaya pada kekuatan kolaborasi, continuous learning, dan delivering high-quality code. Setiap project adalah kesempatan untuk belajar hal baru dan menciptakan sesuatu yang meaningful.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ketika tidak coding, saya suka mengikuti komunitas tech, berkontribusi ke open source, dan berbagi pengetahuan dengan developer lain.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: '🚀', number: '50+', label: 'Projects Delivered' },
              { icon: '👥', number: '30+', label: 'Happy Clients' },
              { icon: '⭐', number: '100+', label: 'Code Reviews' },
              { icon: '📚', number: '5+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{skillGroup.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    ✓ {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="p-8 rounded-2xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {exp.title}
                  </h3>
                  <p className="text-purple-300 text-lg">{exp.company}</p>
                </div>
                <span className="px-4 py-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full text-sm font-semibold text-purple-300">
                  {exp.year}
                </span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 bg-linear-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-sm p-12 md:p-16 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how I can help bring your project to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.section>

      </main>
    </div>
  );
}

