import { motion } from 'framer-motion';
import { Code2, Database, Globe, Lightbulb, Palette, Server, Smartphone, Wrench } from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      name: 'Visual Studio Code',
      category: 'Code Editor',
      icon: Code2,
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'React JS',
      category: 'Framework',
      icon: Globe,
      gradient: 'from-cyan-500 to-cyan-700',
    },
    {
      name: 'Next JS',
      category: 'Framework',
      icon: Server,
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      name: 'JavaScript',
      category: 'Language',
      icon: Code2,
      gradient: 'from-yellow-500 to-yellow-700',
    },
    {
      name: 'Next JS',
      category: 'Framework & Library',
      icon: Database,
      gradient: 'from-green-500 to-green-700',
    },
    {
      name: 'TailwindCSS',
      category: 'Styling',
      icon: Palette,
      gradient: 'from-teal-500 to-teal-700',
    },
    {
      name: 'Adobe Illustrator',
      category: 'Design Tool',
      icon: Palette,
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      name: 'Canva',
      category: 'Design Tool',
      icon: Lightbulb,
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      name: 'Figma',
      category: 'Design Tool',
      icon: Palette,
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      name: 'Supabase',
      category: 'Backend',
      icon: Database,
      gradient: 'from-emerald-500 to-emerald-700',
    },
    {
      name: 'UnlimitedCSS',
      category: 'Styling',
      icon: Wrench,
      gradient: 'from-indigo-500 to-indigo-700',
    },
    {
      name: 'React Native',
      category: 'Framework',
      icon: Smartphone,
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Kotlin',
      category: 'Language',
      icon: Code2,
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      name: 'Firebase',
      category: 'Backend',
      icon: Database,
      gradient: 'from-yellow-600 to-orange-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="tools" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Tools & Technologies</h2>
          <p className="text-gray-400">My Professional Skills</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 cursor-pointer overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-teal-500/0 group-hover:from-purple-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>

                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={28} className="text-white" />
                </motion.div>

                <h3 className="font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 transition-all">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-400">{tool.category}</p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-teal-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tools;
