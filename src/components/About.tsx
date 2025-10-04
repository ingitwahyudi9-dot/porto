import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { User } from 'lucide-react';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
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

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <div className="relative rounded-3xl border-2 border-purple-500/30 p-12 bg-gradient-to-br from-purple-900/10 via-black/50 to-black/50 backdrop-blur-sm">
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-purple-500 via-teal-500 to-purple-500 rounded-3xl opacity-20 blur-xl -z-10"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                About Me
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                I'm Faris Edrik Prayoga, a 19-year-old developer passionate about fullstack engineering, High-performance applications with an understanding of system architecture, API development, cloud-based development, blending creativity and efficiency in every technical solution.
              </motion.p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-2xl border border-purple-500/20"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-2">
                    20+
                  </div>
                  <div className="text-sm text-gray-400">Project Finished</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Working Freelance, Creating with react
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-teal-900/30 to-teal-800/30 p-6 rounded-2xl border border-teal-500/20"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-2">
                    3+
                  </div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </motion.div>
              </div>
            </div>

            <motion.div
              ref={cardRef}
              className="flex justify-center lg:justify-end"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              style={{ perspective: 1000 }}
            >
              <motion.div
                style={{
                  rotateX: isHovered ? rotateX : 0,
                  rotateY: isHovered ? rotateY : 0,
                  rotateZ: isFlipped ? 180 : 0,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 6,
                    ease: 'easeInOut',
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-[280px] h-[400px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10"></div>

                  <div className="relative h-full p-8 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center text-xs font-bold text-black">
                        CHIP
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                        <User size={20} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-teal-500/30"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">
                          👤
                        </div>
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">NAME</div>
                        <div className="text-xl font-bold">Faris Edrik P</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">ROLE</div>
                          <div className="text-sm font-semibold text-purple-400">
                            Developer
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">LEVEL</div>
                          <div className="text-sm font-semibold text-teal-400">
                            Fullstack
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-gray-700">
                        <div className="text-xs text-gray-500 mb-1">ID NUMBER</div>
                        <div className="text-sm font-mono text-gray-400">
                          FE-2024-001
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-tr-full"></div>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 rounded-3xl opacity-30 blur-lg -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
