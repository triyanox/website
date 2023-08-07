"use client";
import Image from "components/Image";
import Link from "components/Link";
import Header from "components/post/Header";
import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Like from "./Like";

const MDX = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <div className="flex flex-col justify-center items-center">
      <article className="w-full prose prose-2xl max-w-7xl gap-2 pb-24 prose-code:rounded-3xl prose-code:text-text-primary-light prose-pre:rounded-3xl prose-pre:bg-bg-secondary-light dark:prose-invert dark:prose-code:text-text-primary-dark dark:prose-pre:bg-bg-secondary-dark md:prose-pre:text-xl">
        <div className="w-full flex flex-col">
          <Header post={post} />
        </div>
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
    </div>
  );
};

export default MDX;
