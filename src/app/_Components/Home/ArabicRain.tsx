"use client";
import { motion } from "framer-motion";

const arabicLetters =
  "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي".split(" ");

export default function ArabicRain() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-50">
      {/* خلفية خفيفة */}
      <div className="iopacity-80" />

      {Array.from({ length: 40 }).map((_, i) => {
        const letter =
          arabicLetters[Math.floor(Math.random() * arabicLetters.length)];
        return (
          <motion.span
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: "100vh",
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            className="absolute text-slate-300 text-3xl font-bold blur-[0.5px]"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </div>
  );
}
