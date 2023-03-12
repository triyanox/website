import Hero from "components/home/Hero";
import Projects from "components/home/Projects";
import Skills from "components/home/Skills";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Skills />
      <Projects />
    </Fragment>
  );
}
