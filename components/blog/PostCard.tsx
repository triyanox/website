"use client";
import { Loading } from "components/Loading";
import { Post } from "contentlayer/generated";
import fetcher from "lib/fetcher";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";

const PostCard = ({ post }: { post: Post }) => {
  const [ref, inView] = useInView();
  const { data, error } = useSWR<{
    views: number;
    likes: number;
  }>(`/api/post/${post.slug}`, fetcher);

  return (
    <Link
      ref={ref}
      href={`/blog/${post.slug}`}
      key={post._id}
      className="w-full flex h-full justify-center items-start gap-2 flex-col px-6 py-8 rounded-2xl bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-shadow-secondary dark:shadow-shadow-secondary-dark"
    >
      <h3 className="text-2xl font-bold">{post.title}</h3>
      <div className="flex w-full items-center justify-start gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        <p className="">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>•</p>
        <p className="">
          {String(post.readTime?.minutes).split(".")[0]} min read
        </p>
        <p>•</p>
        {data && !error ? data.views + " views" : <Loading />}
      </div>
      <p className="mt-4 text-xl">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="text-md text-text-secondary-light dark:text-text-secondary-dark bg-bg-primary-light dark:bg-bg-primary-dark px-2 py-1 rounded-xl"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default PostCard;
