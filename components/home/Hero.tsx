"use client";
import { Message, Resume } from "components/icons";
import { LinkButton } from "../buttons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-start flex-col py-8">
      <motion.div
        initial={{ scale: 0, y: 100, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#00B4DB] via-[#0083B0] to-[#3A00FF] w-24 h-24 rounded-full animate-gradient-xy shadow-shadow-primary dark:shadow-shadow-primary-dark"
      />
      <div className="flex flex-col justify-center items-satrt gap-4 py-8 w-full">
        <h1 className="text-3xl md:text-5xl text-text-primary-light dark:text-text-primary-dark font-bold">
          Mohamed Achaq
        </h1>
        <h3 className="text-xl text-text-secondary-light dark:text-text-secondary-dark font-medium">
          I&apos;m a software engineer based in Morocco, with a passion for
          coding and problem-solving. I have a solid background in computer
          science and extensive experience in developing software applications
          for various industries. I&apos;m a detail-oriented individual who
          enjoys tackling complex challenges and delivering high-quality
          results. In my free time, I enjoy learning new technologies and
          contributing to open-source projects and producing music.
        </h3>
        <div className="flex w-full justify-start items-center gap-4 py-4">
          <LinkButton href="mailto:hi@achaq.dev">
            <Message />
            Get in touch
          </LinkButton>
          <LinkButton href="/resume.pdf">
            <Resume />
            Resume
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
