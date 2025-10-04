import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const chatMessages = [
    {
      user: 'Faris Edrik Prayoga',
      message: 'Hello! Im excited to work with you Maybe we can create something awesome',
      time: '10:30 AM',
      avatar: '👤',
    },
    {
      user: 'portfolio12.contact@gmail',
      message: 'Hi! i wanna work with you',
      time: '10:32 AM',
      avatar: '👨',
    },
    {
      user: 'Faris Edrik Prayoga',
      message: 'Great! Lets discuss the work details Whatsapp you now?',
      time: '10:35 AM',
      avatar: '👤',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
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
          <h2 className="text-4xl font-bold mb-4">Contact & Chat</h2>
          <p className="text-gray-400">Get in touch with me or chat in real-time</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold">Chat Room</h3>
              </div>

              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0 text-lg">
                      {msg.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-purple-400">
                          {msg.user}
                        </span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl rounded-tl-none p-3 border border-gray-700/30">
                        <p className="text-sm text-gray-300">{msg.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-purple-800 transition-colors"
                >
                  <Send size={16} />
                </motion.button>
              </motion.div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Join the Telegram group
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-teal-400" size={28} />
                <h3 className="text-2xl font-bold">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Input Your Name"
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-10 py-3 focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Input Email"
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-10 py-3 focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500/50 transition-colors text-sm resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
