"use client";
import Animations from "components/Animations";
import Icons from "components/icons";
import ToolTip from "components/Tooltip";
import NextLink from "next/link";

const ProjectList = [
  {
    id: "artemis",
    title: "artemis",
    summary:
      "artemis is an interpreted programming language written in TypeScript",
    github: "https://github.com/triyanox/artemis",
    link: "https://www.npmjs.com/package/@artemis-lang/cli",
    tags: ["node.js", "typescript", "programming language", "interpreter"],
    type: "cli",
  },
  {
    id: "Matz",
    title: "Matz",
    summary: "Matz is dsl for working with matrices and vectors.",
    github: "https://github.com/triyanox/matz",
    link: "https://github.com/triyanox/matz/pkgs/container/matz",
    tags: ["node.js", "typescript", "dsl"],
    type: "cli",
  },
  {
    id: "async-sequence",
    title: "async-sequence",
    summary:
      "PromiseSequencer is a utility class that enables you to execute promises sequentially",
    github: "https://github.com/triyanox/async-sequence",
    link: "https://www.npmjs.com/package/@triyanox/async-sequence",
    tags: ["node.js", "typescript", "promises", "async"],
    type: "lib",
  },
  {
    id: "lla",
    title: "lla",
    summary: "The Elegant ls Alternative",
    github: "https://github.com/triyanox/lla",
    link: "https://crates.io/crates/lla",
    tags: ["rust", "cli"],
    type: "cli",
  },
  {
    id: "quikc",
    title: "quikc",
    summary: "Easy caching for your Node.js applications",
    github: "https://github.com/triyanox/quikc",
    link: "https://www.npmjs.com/org/quikc",
    tags: ["node.js", "typescript", "express", "redis"],
    type: "lib",
  },
  {
    id: "iamjs",
    title: "iamjs",
    summary: "A fully featured library for easy authorization",
    github: "https://github.com/triyanox/iamjs",
    link: "https://iamjs.achaq.dev",
    tags: ["node.js", "typescript", "mongodb", "express", "react"],
    type: "lib",
  },
  {
    id: "shinu",
    title: "shinu",
    summary: "Elegant Process Exception Handling",
    github: "https://github.com/triyanox/shinu",
    link: "https://www.npmjs.com/package/shinu",
    tags: ["node.js", "typescript"],
    type: "lib",
  },
  {
    id: "pgbar",
    title: "pgbar",
    summary: "A minimal progress bar written in rust",
    github: "https://github.com/triyanox/pgbar",
    link: "https://crates.io/crates/pgbar",
    tags: ["rust"],
    type: "lib",
  },
  {
    id: "rscrypt",
    title: "rscrypt",
    summary: "A simple and fast encryption library for rust",
    github: "https://github.com/triyanox/rscrypt",
    link: "https://crates.io/crates/rscrypt",
    tags: ["rust", "encryption"],
    type: "lib",
  },
  {
    id: "website",
    title: "Website",
    summary: "My digital garden on the web",
    github: "https://github.com/triyanox/website",
    link: "https://achaq.dev",
    tags: ["next.js", "typescript", "tailwindcss", "react"],
    type: "web",
  },
];

const Projects = () => {
  return (
    <section className="w-full flex justify-center items-start flex-col py-8 gap-8">
      <div className="flex flex-col justify-center items-satrt gap-4 py-2 w-full">
        <h3 className="text-xl md:text-2xl font-semibold">
          Projects and Open Source Contributions
        </h3>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Here are some of my projects and open source contributions.
        </p>
      </div>
      <Animations.StaggerContainerWithObserver className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {ProjectList.map((project) => (
          <div
            key={project.id}
            className="flex h-full flex-col justify-satrt items-start gap-4 py-8 w-full px-6 bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-shadow-secondary dark:shadow-shadow-secondary-dark rounded-2xl"
          >
            <div className="w-full flex justify-between">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {
                {
                  lib: (
                    <div className="flex gap-2">
                      <NextLink target={"_blank"} href={project.github}>
                        <ToolTip text="Github">
                          <Icons.Code />
                        </ToolTip>
                      </NextLink>
                      <NextLink target={"_blank"} href={project.link}>
                        <ToolTip text="Library">
                          <Icons.Package />
                        </ToolTip>
                      </NextLink>
                    </div>
                  ),
                  cli: (
                    <div className="flex gap-2">
                      <NextLink target={"_blank"} href={project.github}>
                        <ToolTip text="Github">
                          <Icons.Code />
                        </ToolTip>
                      </NextLink>
                      <NextLink target={"_blank"} href={project.link}>
                        <ToolTip text="Binary">
                          <Icons.Cli />
                        </ToolTip>
                      </NextLink>
                    </div>
                  ),
                  web: (
                    <div className="flex gap-2">
                      <NextLink target={"_blank"} href={project.github}>
                        <ToolTip text="Github">
                          <Icons.Code />
                        </ToolTip>
                      </NextLink>
                      <NextLink target={"_blank"} href={project.link}>
                        <ToolTip text="Open">
                          <Icons.Link />
                        </ToolTip>
                      </NextLink>
                    </div>
                  ),
                }[project.type]
              }
            </div>
            <p className="text-text-primary-light/60 dark:text-bg-primary-light/60">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-text-secondary-light dark:text-text-secondary-dark bg-bg-primary-light dark:bg-bg-primary-dark px-2 py-1 rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Animations.StaggerContainerWithObserver>
    </section>
  );
};

export default Projects;
