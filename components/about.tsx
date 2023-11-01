"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium">Textile Engineering</span>, I decided to
        pursue my pasion for programing. I enrolled in a coding bootcamp and
        learned
        <span className="font-medium"> full-stack web developement. </span>{" "}
        <span className="italic">My favourite part of programing</span> is the
        problem solving aspect. I <span className="underline">Love</span> the
        feeling fo finally figuring out a solution to a problem. My core stack
        is
        <span className="font-medium">
          {" "}
          React, Next.js, Node.js and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a
        <span className="font-medium"> full time positon</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        reading books, explore new technologies documentations and spent time
        with my family. I also enjoy
        <span className="font-medium"> learning new things</span>.
      </p>
    </motion.section>
  );
};

export default About;
