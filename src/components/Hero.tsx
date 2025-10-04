import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-4 flex items-center gap-2"
          >
            <span className="text-teal-400">"</span>
            <span>Creat or just emoodional ?</span>
            <span className="text-teal-400">"</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Faris Edrik Prayoga</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 leading-relaxed"
          >
            I am specialized in fullstack engineering using backend services, leveraging expertise in developing scalable, reliable, and high-performance web applications. Proficient in modern frontend frameworks combined with cloud-based development, delivering creativity and efficiency in every technical solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-teal-500/50 rounded-lg font-semibold hover:bg-teal-500/10 transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              },
            }}
            className="relative w-[320px] h-[480px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-900/20 to-black rounded-3xl backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-8 flex flex-col items-center justify-between">
              <div className="w-full flex justify-between items-start">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  className="w-16 h-16 rounded-full border-2 border-teal-400/30 border-t-teal-400"
                ></motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-40 h-40 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    👤
                  </div>
                </motion.div>

                <h2 className="text-3xl font-bold mb-2">Faris Edrik P</h2>
                <p className="text-gray-400 mb-6">Fullstack Developer</p>

                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <Github size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                  >
                    <Linkedin size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="w-full flex justify-between items-end">
                <div className="text-xs text-gray-500">
                  <span className="text-teal-400">@farisedrik</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-teal-600/80 rounded-lg text-sm font-semibold hover:bg-teal-600 transition-colors"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 rounded-3xl opacity-20 blur-xl -z-10 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
