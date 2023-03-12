import Header from "components/blog/Header";
import Posts from "components/blog/Posts";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mohamed Achaq's Thoughts about Software Engineering, Design, Art and Life",
};

export default function Blog() {
  return (
    <Fragment>
      <Header />
      <Posts />
    </Fragment>
  );
}
