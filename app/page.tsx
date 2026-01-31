'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Data Projects yang diperbarui
const projects = [
  {
    id: 1,
    title: 'E-Commerce Core',
    category: 'Fullstack',
    image: '🛍️', // Idealnya ganti dengan URL gambar asli
    tech: ['Next.js', 'Stripe'],
    colSpan: 'md:col-span-2', // Bento Grid: Lebar
    gradient: 'from-violet-600/20 to-indigo-600/20'
  },
  {
    id: 2,
    title: 'Analytix Pro',
    category: 'Dashboard',
    image: '📊',
    tech: ['React', 'D3.js'],
    colSpan: 'md:col-span-1', // Bento Grid: Kecil
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    id: 3,
    title: 'AI Companion',
    category: 'Artificial Intelligence',
    image: '🤖',
    tech: ['OpenAI', 'Python'],
    colSpan: 'md:col-span-1',
    gradient: 'from-emerald-600/20 to-teal-600/20'
  },
  {
    id: 4,
    title: 'Social Connect',
    category: 'Mobile App',
    image: '📱',
    tech: ['React Native', 'Firebase'],
    colSpan: 'md:col-span-2',
    gradient: 'from-orange-600/20 to-red-600/20'
  },
];

export default function Home() {
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
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col items-center text-center mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for freelance work
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50"
          >
            Crafting Digital <br />
            <span className="text-glow">Experiences.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            Saya membantu brand dan startup membangun website yang tidak hanya berfungsi, 
            tapi juga memberikan kesan visual yang mendalam dan profesional.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors font-medium">
              Contact Me
            </Link>
          </motion.div>
        </section>

        {/* --- PROFILE CARD SECTION --- */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 md:p-12 hover:border-white/20 transition-colors duration-500"
          >
            {/* Gradient Glow background */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Profile Avatar */}
              <div className="flex flex-col items-center text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl mb-6 shadow-lg"
                >
                  👨‍💻
                </motion.div>

                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Muhammad Faridzqi Suryadi
                </h2>

                {/* Title */}
                <p className="text-purple-300 text-lg font-medium mb-6">
                  Full Stack Developer & Digital Creative
                </p>

                {/* Bio */}
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                  Passionate about crafting beautiful and functional digital experiences. 
                  I specialize in modern web technologies and love transforming ideas into innovative solutions 
                  that make a real impact. When I'm not coding, you'll find me exploring new technologies or 
                  contributing to the developer community.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 w-full mb-8 py-6 border-t border-b border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">50+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">5+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Years Exp</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">30+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Happy Clients</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center">
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                  >
                    Twitter
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS BENTO GRID --- */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Works</h2>
            <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden ${project.colSpan} hover:border-white/20 transition-colors duration-500`}
              >
                {/* Gradient Glow effect behind card */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.gradient} blur-2xl`}></div>
                
                <div className="relative z-10 h-full p-8 flex flex-col justify-between h-[300px] md:h-[400px]">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-xs text-gray-300">
                        {project.category}
                      </div>
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm line-clamp-2">
                      Sebuah solusi digital komprehensif yang menggabungkan performa tinggi dan desain estetis.
                    </p>
                    <div className="flex gap-2">
                      {project.tech.map((t, i) => (
                         <span key={i} className="text-xs text-gray-500 font-mono">#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- TECH STACK (Marquee Style) --- */}
        <section className="mb-32 text-center">
          <p className="text-sm text-gray-500 font-mono mb-8 uppercase tracking-widest">Technologies</p>
          <div className="flex flex-wrap justify-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Framer Motion', 'Docker'].map((tech) => (
              <div key={tech} className="px-6 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 md:p-24 text-center">
            {/* Background pattern inside CTA */}
            <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to start your project?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Jangan biarkan ide hebat Anda hanya menjadi angan-angan. Mari berdiskusi dan wujudkan sesuatu yang luar biasa.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-shadow"
                >
                  Start a Conversation
                </motion.button>
              </Link>
            </div>
        </section>

      </main>
    </div>
  );
}