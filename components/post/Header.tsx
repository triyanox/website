"use client";
import { Loading } from "components/Loading";
import { Post } from "contentlayer/generated";
import fetcher from "lib/fetcher";
import { Fragment, useEffect, useRef } from "react";
import useSWR from "swr";
import { Heart, Show } from "react-iconly";

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
    <Fragment>
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-4 py-8">
        <h1 className="text-5xl">{post.title}</h1>
        <div className="flex w-fit lg:min-w-fit justify-start lg:justify-end items-center gap-2 px-8 py-2 rounded-2xl bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-shadow-secondary dark:shadow-shadow-secondary-dark">
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
            {!data && !error ? (
              <Loading />
            ) : (
              <div className="flex gap-1 items-center justify-center">
                {data?.views}
                <Show set="two-tone" />
              </div>
            )}
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            •
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
            {!data && !error ? (
              <Loading />
            ) : (
              <div className="flex gap-1 items-center justify-center">
                {data?.likes}
                <Heart set="two-tone" />
              </div>
            )}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
