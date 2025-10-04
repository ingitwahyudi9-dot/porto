import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Website Sekolah',
      description: 'HTML, CSS Bootstrap w/ ACE',
      image: '🏫',
      gradient: 'from-blue-900/30 to-blue-800/30',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Company Profile',
      description: 'HTML CSS Javascript SQL (Query)',
      image: '🏢',
      gradient: 'from-purple-900/30 to-purple-800/30',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Web Portofolio V2',
      description: 'Web Design (portfolio) V2',
      image: '💼',
      gradient: 'from-teal-900/30 to-teal-800/30',
      borderColor: 'border-teal-500/30',
    },
    {
      title: 'Website Wisata',
      description: 'Pagar Seni Boarding w/ Bootstrap & PHP',
      image: '🗺️',
      gradient: 'from-green-900/30 to-green-800/30',
      borderColor: 'border-green-500/30',
    },
    {
      title: 'Web Portfolio',
      description: 'DOT Interview (First Portfolio)',
      image: '📂',
      gradient: 'from-pink-900/30 to-pink-800/30',
      borderColor: 'border-pink-500/30',
    },
    {
      title: 'Website Portfolio',
      description: 'DOT Interview (Personal Website)',
      image: '🌐',
      gradient: 'from-orange-900/30 to-orange-800/30',
      borderColor: 'border-orange-500/30',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="project" className="min-h-screen flex items-center justify-center px-6 py-20">
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
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Project</h2>
          <p className="text-gray-400">
            Showcasing a collection of projects that reflect my skills, growth and passion for building meaningful digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <div className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} rounded-2xl overflow-hidden cursor-pointer`}>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10"></div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-colors"
                    >
                      <Github size={20} />
                    </motion.button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-teal-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-teal-500/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-teal-500/20 group-hover:to-purple-600/20 rounded-2xl blur-xl -z-10 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl font-semibold hover:from-purple-700 hover:to-teal-700 transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
