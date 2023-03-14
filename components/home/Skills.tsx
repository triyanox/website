"use client";
import Animations from "components/Animations";
import Icons from "components/icons";

const SkillsList = [
  {
    id: "bd",
    title: "Backend Development",
    icon: <Icons.Backend />,
    summary:
      "Looking for a powerful backend for your web application? With my expertise in Node.js, I can create a robust and scalable backend that will ensure your app runs smoothly and efficiently.",
  },
  {
    id: "fd",
    title: "Frontend Development",
    icon: <Icons.Frontend />,
    summary:
      "Need an intuitive and visually appealing user interface? With my skills in React front-end development, I can create stunning interfaces that will make your users fall in love with your product.",
  },
  {
    id: "ud",
    title: "UI/UX Design",
    icon: <Icons.Design />,
    summary:
      "Want to ensure your website is user-friendly and engaging? With my expertise in UI/UX design, I can create a seamless experience for your users that will keep them coming back for more.",
  },
];

const Skills = () => {
  return (
    <section className="w-full flex justify-center items-start flex-col py-8 gap-8">
      <div className="flex flex-col justify-center items-satrt gap-4 py-2 w-full">
        <h3 className="text-xl md:text-2xl font-bold">
          What is like to work with me ?
        </h3>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Unlock the Full Potential of Your Web Application with Expert Backend
          Development, Stunning React UI, and Intuitive UI/UX Design.
        </p>
      </div>
      <Animations.StaggerContainer className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        {SkillsList.map((service) => (
          <div
            key={service.id}
            className="flex h-full flex-col justify-center items-start gap-4 py-8 w-full px-6 bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-shadow-secondary dark:shadow-shadow-secondary-dark rounded-2xl"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p>{service.summary}</p>
          </div>
        ))}
      </Animations.StaggerContainer>
    </section>
  );
};

export default Skills;
