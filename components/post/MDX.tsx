"use client";
import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "components/Link";
import Image from "components/Image";
import Header from "components/post/Header";
import Like from "./Like";

const MDX = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <article className="w-full prose px-2 lg:px-16 prose-md md:prose:lg lg:prose-2xl mx-auto gap-4 pb-24 prose-code:rounded-3xl prose-code:text-text-primary-light prose-pre:rounded-3xl prose-pre:bg-bg-secondary-light dark:prose-invert dark:prose-code:text-text-primary-dark dark:prose-pre:bg-bg-secondary-dark md:prose-pre:text-xl">
      <Header post={post} />
      <Component
        components={
          {
            a: Link,
            Image,
          } as any
        }
      />
      <Like slug={post.slug} />
    </article>
  );
};

export default MDX;
