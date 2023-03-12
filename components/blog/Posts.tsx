"use client";
import classNames from "classnames";
import Animations from "components/Animations";
import { allPosts, Post } from "contentlayer/generated";
import { useState } from "react";
import PostCard from "./PostCard";

const Posts = () => {
  const [filters, setFilters] = useState<{
    tags: string[];
    search: string;
  }>({
    tags: [],
    search: "",
  });

  const filterByTags = (tags: string[]) => {
    return allPosts.filter((post) => {
      return tags.every((tag) => post.tags.includes(tag));
    });
  };

  const filterBySearch = (search: string) => {
    return allPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  function filter(posts: Post[], tags: string[], search: string) {
    if (tags.length > 0) {
      posts = filterByTags(tags);
    }
    if (search) {
      posts = filterBySearch(search);
    }
    return posts;
  }

  function getUniqueTags() {
    const tags = allPosts.map((post) => post.tags).flat();
    return [...Array.from(new Set(tags))];
  }

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
          {getUniqueTags().map((tag) => (
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
      {filter(allPosts, filters.tags, filters.search).length === 0 && (
        <div className="w-full flex justify-center items-center gap-8 flex-col py-16">
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
        </div>
      )}
      <Animations.PresenceContainer className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
        {filter(allPosts, filters.tags, filters.search).map((post) => (
          <Animations.PresenceItem variant="fadeIn" key={post._id}>
            <PostCard post={post} />
          </Animations.PresenceItem>
        ))}
      </Animations.PresenceContainer>
    </div>
  );
};

export default Posts;
