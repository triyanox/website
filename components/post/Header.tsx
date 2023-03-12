"use client";
import { Loading } from "components/Loading";
import { Post } from "contentlayer/generated";
import fetcher from "lib/fetcher";
import { useEffect, useRef } from "react";
import useSWR from "swr";

const Header = ({ post }: { post: Post }) => {
  const { data, error } = useSWR<{
    views: number;
    likes: number;
  }>(`/api/post/${post.slug}`, fetcher);

  const effectCalled = useRef(false);
  useEffect(() => {
    if (!effectCalled.current) {
      const registerView = () =>
        fetch(`/api/views/${post.slug}`, {
          method: "POST",
        });
      registerView();
      effectCalled.current = true;
    }
  }, [post.slug]);

  return (
    <section className="w-full flex justify-center items-start flex-col py-8 md:py-16 gap-4">
      <div className="w-full flex flex-col justify-center items-start xl:flex-row xl:justify-between xl:items-center">
        <h1 className="text-3xl xl:text-5xl">{post.title}</h1>
        <div className="flex justify-end items-center gap-2 px-8 py-2 rounded-2xl bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-shadow-secondary dark:shadow-shadow-secondary-dark">
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            •
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            {!data && !error ? <Loading /> : data?.views + " views"}
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            •
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            {!data && !error ? <Loading /> : data?.likes + " likes"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
