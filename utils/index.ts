import { Post } from "contentlayer/generated";

const filterByTags = (posts: Post[], tags: string[]) => {
  return posts.filter((post) => {
    return tags.every((tag) => post.tags.includes(tag));
  });
};

const filterBySearch = (posts: Post[], search: string) => {
  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    );
  });
};

function filterPosts(posts: Post[], tags: string[], search: string) {
  if (tags.length > 0) {
    posts = filterByTags(posts, tags);
  }
  if (search) {
    posts = filterBySearch(posts, search);
  }
  return posts;
}

function getUniqueTags(allPosts: Post[]) {
  const tags = allPosts.map((post) => post.tags).flat();
  return [...Array.from(new Set(tags))];
}

function moveToStart<T>(arr: T[], value: T) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
    arr.unshift(value);
  }
  return arr;
}

function moveToEnd<T>(arr: T[], value: T) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
    arr.push(value);
  }
  return arr;
}

const utils = {
  filterPosts,
  getUniqueTags,
  moveToStart,
  moveToEnd,
};

export default utils;
