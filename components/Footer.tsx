"use client";
import NextLink from "next/link";
import { Github, Linkedin, Mail, Twitter } from "./icons";
import ToolTip from "./Tooltip";

const LinkList = [
  {
    name: "Github",
    icon: <Github />,
    link: "https://github.com/triyanox",
  },
  {
    name: "Twitter",
    icon: <Twitter />,
    link: "https://twitter.com/ac__haq",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/mohamed-achaq/",
  },
  {
    name: "Email",
    icon: <Mail />,
    link: "mailto:hi@achaq.dev",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start py-16 lg:justify-between lg:items-center lg:flex-row gap-4">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Mohamed Achaq
        </h1>
        <h3>Software Engineer, UI/UX designer and music producer.</h3>
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="flex flex-row justify-start items-center gap-2">
          {LinkList.map((link) => (
            <NextLink
              target={"_blank"}
              className="flex justify-start items-center gap-2"
              href={link.link}
              key={link.name}
            >
              <ToolTip text={link.name} offset={12}>
                {link.icon}
              </ToolTip>
            </NextLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
