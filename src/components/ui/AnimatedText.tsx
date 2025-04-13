"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type AnimatedTextProps = {
  text?: string;
  multipleText?: string[];
  delay?: number;
  className?: string;
  interval?: number;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // Delay between lines
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedText({
  multipleText,
  interval = 2000,
  className,
}: AnimatedTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % multipleText.length);
    }, interval);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      <motion.p key={index} variants={item} className={className}>
        {multipleText?.[index]}
      </motion.p>
    </motion.div>
  );
}
