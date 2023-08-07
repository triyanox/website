"use client";
import classNames from "classnames";
import Animations from "components/Animations";
import { allPosts } from "contentlayer/generated";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { useCallback, useState } from "react";
import utils from "utils";
import PostCard from "./PostCard";

const Posts = () => {
  const [filters, setFilters] = useState<{
    tags: string[];
    search: string;
    allTags: string[];
  }>({
    tags: [],
    search: "",
    allTags: utils.getUniqueTags(allPosts),
  });

  const handleSelect = useCallback(
    (tag: string) => {
      setFilters({
        ...filters,
        tags: filters.tags.includes(tag)
          ? filters.tags.filter((t) => t !== tag)
          : [...filters.tags, tag],
        allTags: !filters.tags.includes(tag)
          ? utils.moveToStart(filters.allTags, tag)
          : utils.moveToEnd(filters.allTags, tag),
      });
    },
    [filters]
  );

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
        <Reorder.Group
          className="w-full flex justify-start items-center gap-2 flex-wrap"
          as="div"
          axis="x"
          values={filters.allTags}
          onReorder={(newOrder) => {
            setFilters({
              ...filters,
              allTags: newOrder,
            });
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              transition: {
                staggerChildren: 0.1,
                duration: 0.5,
              },
            },
            visible: {
              transition: {
                staggerChildren: 0.1,
                duration: 0.5,
              },
            },
          }}
        >
          {filters.allTags.map((tag) => (
            <Reorder.Item
              as="button"
              value={tag}
              key={filters.allTags.indexOf(tag)}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className={classNames(
                "text-lg cursor-pointer text-text-secondary-light dark:text-text-secondary-dark px-2 py-1 rounded-xl",
                {
                  "bg-bg-secondary-light dark:bg-bg-secondary-dark font-bold shadow-shadow-secondary dark:shadow-shadow-secondary-dark":
                    filters.tags.includes(tag),
                }
              )}
              onClick={handleSelect.bind(null, tag)}
            >
              #{tag}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <AnimatePresence mode="wait">
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
            className={classNames(
              "w-full flex justify-center items-center gap-8 flex-col py-16",
              {
                "py-48": !utils.filterPosts(
                  allPosts,
                  filters.tags,
                  filters.search
                ).length,
              }
            )}
          >
            <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
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
