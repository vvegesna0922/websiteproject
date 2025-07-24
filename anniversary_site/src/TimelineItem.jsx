import { motion } from "framer-motion";

export default function TimelineItem({ title, message, image, index }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-4 mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl"
      />
      <h3 className="text-xl font-bold text-pink-600 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{message}</p>
    </motion.div>
  );
}