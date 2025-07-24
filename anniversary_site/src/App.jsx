import { timelineData } from "./data";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-pink-100 via-blue-100 to-white min-h-screen">
      <section className="h-screen flex flex-col items-center justify-center text-center p-6">
        <motion.h1
          className="text-5xl font-bold text-pink-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Happy One Year 💖
        </motion.h1>
        <motion.p
          className="text-lg text-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm so lucky to love and be loved by you.
        </motion.p>
        <motion.div
          className="mt-10 text-blue-400 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          ↓ Scroll to see our journey ↓
        </motion.div>
      </section>

      <section className="px-4 pb-20">
        {timelineData.map((entry, idx) => (
          <TimelineItem key={idx} index={idx} {...entry} />
        ))}
      </section>
    </div>
  );
}