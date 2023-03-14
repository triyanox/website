"use client";
import classNames from "classnames";
import Animations from "components/Animations";
import { allPosts } from "contentlayer/generated";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import utils from "utils";
import PostCard from "./PostCard";

const Posts = () => {
  const [filters, setFilters] = useState<{
    tags: string[];
    search: string;
  }>({
    tags: [],
    search: "",
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex justify-start items-center gap-8 flex-col">
        <input
          className="w-full px-8 py-6 text-lg md:text-xl rounded-xl bg-bg-secondary-light dark:bg-bg-secondary-dark text-text-primary-light dark:text-text-primary-dark  placeholder:text-text-secondary-light placeholder:dark:text-text-secondary-dark outline-none shadow-shadow-secondary dark:shadow-shadow-secondary-dark"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) => {
            setFilters({
              ...filters,
              search: e.target.value,
            });
          }}
        />
        <div className="w-full flex justify-start items-center gap-2 flex-wrap">
          {utils.getUniqueTags(allPosts).map((tag) => (
            <button
              key={tag}
              className={classNames(
                "text-lg text-text-secondary-light dark:text-text-secondary-dark px-2 py-1 rounded-xl",
                {
                  "bg-bg-secondary-light dark:bg-bg-secondary-dark font-bold":
                    filters.tags.includes(tag),
                }
              )}
              onClick={() => {
                setFilters({
                  ...filters,
                  tags: filters.tags.includes(tag)
                    ? filters.tags.filter((t) => t !== tag)
                    : [...filters.tags, tag],
                });
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="popLayout">
        {!utils.filterPosts(allPosts, filters.tags, filters.search).length ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full flex justify-center items-center gap-8 flex-col py-16"
          >
            <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
              No posts found
            </h1>

            <button
              className="text-lg text-text-secondary-light dark:text-text-secondary-dark px-2 py-1 rounded-xl bg-bg-secondary-light dark:bg-bg-secondary-dark"
              onClick={() => {
                setFilters({
                  ...filters,
                  tags: [],
                  search: "",
                });
              }}
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <Animations.PresenceContainer className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
            {utils
              .filterPosts(allPosts, filters.tags, filters.search)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((post) => (
                <Animations.PresenceItem
                  variant="fadeInWithExit"
                  key={post._id}
                >
                  <PostCard post={post} />
                </Animations.PresenceItem>
              ))}
          </Animations.PresenceContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Posts;
