"use client";
import Animations from "components/Animations";
import Icons from "components/icons";
import ToolTip from "components/Tooltip";
import NextLink from "next/link";

const ProjectList = [
  {
    id: "pgbar",
    title: "pgbar",
    summary: "A minimal progress bar written in rust",
    github: "https://github.com/triyanox/pgbar",
    package: "https://crates.io/crates/pgbar",
    tags: ["rust"],
  },
  {
    id: "lyrol",
    title: "lyrol",
    summary: "A fully featured role management library for node.js",
    github: "https://github.com/triyanox/lyrol",
    package: "https://www.npmjs.com/package/lyrol",
    tags: ["node.js", "typescript", "mongodb", "express", "react"],
  },
  {
    id: "rscrypt",
    title: "rscrypt",
    summary: "A simple and fast encryption library for rust",
    github: "https://github.com/triyanox/rscrypt",
    package: "https://crates.io/crates/rscrypt",
    tags: ["rust", "encryption"],
  },
  {
    id: "website",
    title: "Website",
    summary: "My digital garden on the web",
    github: "https://github.com/triyanox/website",
    link: "https://achaq.dev",
    tags: ["next.js", "typescript", "tailwindcss", "react"],
  },
];

const Projects = () => {
  return (
    <section className="w-full flex justify-center items-start flex-col py-8 gap-8">
      <div className="flex flex-col justify-center items-satrt gap-4 py-2 w-full">
        <h3 className="text-xl md:text-2xl font-bold">
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
            className="flex h-full flex-col justify-satrt items-start gap-4 py-12 w-full px-6 bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-shadow-secondary dark:shadow-shadow-secondary-dark rounded-2xl"
          >
            <div className="w-full flex justify-between">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex gap-2">
                {project.github && (
                  <NextLink target={"_blank"} href={project.github}>
                    <ToolTip text="Github">
                      <Icons.Code />
                    </ToolTip>
                  </NextLink>
                )}
                {project.package && (
                  <NextLink target={"_blank"} href={project.package}>
                    <ToolTip text="Package">
                      <Icons.Package />
                    </ToolTip>
                  </NextLink>
                )}
                {project.link && (
                  <NextLink target={"_blank"} href={project.link}>
                    <ToolTip text="Open">
                      <Icons.Link />
                    </ToolTip>
                  </NextLink>
                )}
              </div>
            </div>
            <p>{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-text-secondary-light dark:text-text-secondary-dark bg-bg-primary-light dark:bg-bg-primary-dark px-2 py-1 rounded-md"
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
