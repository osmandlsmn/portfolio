"use client";
import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <div className="flex gap-y-6 flex-col">
      <div className="flex flex-col gap-y-4 justify-center max-w-xl text-md">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        >
          Featured Projects
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
        >
          Explore a selection of projects that showcase my skills and
          contributions.
        </motion.p>
      </div>
    </div>
  );
}
