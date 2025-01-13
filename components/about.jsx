"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a{" "}
        <span className="font-medium">Computer Science and Engineering</span>{" "}
        graduate, I have a strong foundation in algorithms, data structures, and
        system design. My passion for programming grew as I explored{" "}
        <span className="font-medium">full-stack web development</span> through
        projects and coursework.{" "}
        <span className="">Solving complex problems</span> and building
        efficient solutions are the most rewarding parts of my journey. My core
        stack includes{" "}
        <span className="font-medium">
          React.js, Express.js, Next.js, Node.js, and MongoDB
        </span>
        , and I am experienced with{" "}
        <span className="font-medium">JavaScript and TypeScript</span>. I am
        currently playing a <span className="">full-time role</span>{" "}
        as a <span className="font-medium">Junior Software Engineer</span> where I hope to grow and contribute.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy strategy
        games, movies, and time with my cats and dog. I am also passionate about{" "}
        <span className="font-medium">learning</span>, recently diving into{" "}
        <span className="font-medium">history, philosophy, geography, complex geopolitics</span>, and learning
        to play the drums. These interests refresh my mind and inspire
        creativity.
      </p>
    </motion.section>
  );
}
