"use client";
import { postivaClient } from "@/libs/postiva";
import { Content } from "@postiva/client";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { WritingCard } from "./blog-card";

export const WritingSection = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 justify-center max-w-xl text-md">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        >
          Writing
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="text-gray-500 dark:text-gray-400"
        >
          Explore a selection of posts that showcase my skills and
          contributions.
        </motion.p>
      </div>
      <Writings />
    </Fragment>
  );
};

export const Writings = () => {
  const [posts, setPosts] = useState<Content[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await postivaClient.contents.getContents();
      setPosts(posts.data);
    };
    getPosts();
  }, []);

  return (
    <motion.ol
      className="relative flex"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
    >
      <div className="hidden absolute top-3 bottom-0 right-full -mr-1 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

      <div className="flex flex-col gap-y-8">
        {posts?.map((post, index) => (
          <WritingCard key={index} {...post} />
        ))}
      </div>
    </motion.ol>
  );
};
