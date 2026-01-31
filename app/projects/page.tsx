'use client';

import { motion } from 'framer-motion';

const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Core',
    description: 'Full-stack solution with comprehensive product management and secure payment gateways.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    gradient: 'from-purple-600 to-pink-600',
    image: '🛍️',
    details: 'Features centralized inventory, real-time cart sync, and analytics dashboard.',
  },
  {
    id: 2,
    title: 'SaaS Analytics',
    description: 'Real-time business intelligence dashboard with predictive modeling features.',
    tags: ['PostgreSQL', 'Prisma', 'Chart.js'],
    gradient: 'from-blue-600 to-cyan-600',
    image: '📊',
    details: 'Handles millions of data points with sub-second query performance.',
  },
  {
    id: 3,
    title: 'Social Connect',
    description: 'Next-gen social platform focused on privacy and real-time interaction.',
    tags: ['WebSocket', 'Redis', 'Node.js'],
    gradient: 'from-emerald-600 to-green-600',
    image: '👥',
    details: 'Implements end-to-end encryption and ephemeral messaging protocols.',
  },
  {
    id: 4,
    title: 'AI Companion',
    description: 'Context-aware chat application powered by large language models.',
    tags: ['OpenAI', 'Python', 'Vector DB'],
    gradient: 'from-orange-600 to-red-600',
    image: '🤖',
    details: 'Supports RAG (Retrieval-Augmented Generation) for custom knowledge base.',
  },
  {
    id: 5,
    title: 'Task Master',
    description: 'Collaborative project management tool with Kanban and Gantt views.',
    tags: ['Supabase', 'React', 'Zustand'],
    gradient: 'from-indigo-600 to-violet-600',
    image: '📋',
    details: 'Real-time cursors and collaborative editing features similar to Figma.',
  },
  {
    id: 6,
    title: 'API Gateway',
    description: 'High-performance microservices gateway with rate limiting and caching.',
    tags: ['Docker', 'Go', 'Redis'],
    gradient: 'from-amber-500 to-orange-600',
    image: '⚡',
    details: 'Optimized for high-throughput scenarios with 99.99% uptime SLA.',
  },
];

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
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
      
      {/* Header Section */}
      <motion.section
        className="mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono text-purple-300">
          PORTFOLIO ARCHIVE
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Kumpulan proyek yang menggabungkan estetika desain modern dengan arsitektur teknis yang kokoh.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="mb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-[420px]"
            >
              {/* Card Container */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-colors duration-500">
                
                {/* 1. Gradient Glow Effect (Behind Content) */}
                <div className={`absolute -inset-[100px] bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none`}></div>

                {/* 2. Main Content */}
                <div className="relative h-full p-8 flex flex-col z-10">
                  
                  {/* Top: Icon & Title */}
                  <div className="mb-auto">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      <div className="text-xs font-mono text-gray-500 border border-white/5 px-2 py-1 rounded">
                        v1.0
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-400 font-medium group-hover:border-white/20 group-hover:text-gray-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Overlay Action (Slide Up on Hover) */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                   <p className="text-gray-300 text-center mb-6 text-sm">
                     {project.details}
                   </p>
                   <button className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform">
                     View Case Study
                   </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistics Section (Clean Minimalist) */}
      <motion.section
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Menggunakan gap-1 untuk membuat garis pemisah tipis antar grid */}
          {[
            { number: '50+', label: 'Projects Shipped' },
            { number: '30+', label: 'Happy Clients' },
            { number: '99%', label: 'Code Quality' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative py-12 px-6 text-center group"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
               {/* Vertical Separators (Visual only) */}
               {idx !== 0 && (
                 <div className="absolute left-0 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:block hidden"></div>
               )}
               {/* Horizontal Separators for Mobile */}
               {idx !== 0 && (
                 <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden block"></div>
               )}

              <div className="text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-purple-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      </main>
    </div>
  );
}