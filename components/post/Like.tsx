"use client";
import Icons from "components/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSWRConfig } from "swr";

type LikeProps = {
  slug: string;
};

const Like = ({ slug }: LikeProps) => {
  const [liked, setLiked] = useState(false);
  const [hide, setHide] = useState(false);
  const { mutate } = useSWRConfig();
  const handleLike = async () => {
    setLiked(true);
    await fetch(`/api/likes/${slug}`, {
      method: "PUT",
    });
    mutate("/api/post/" + slug);
    setTimeout(() => {
      setHide(true);
    }, 2000);
  };
  return liked ? (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-0 z-50 mr-8 rounded-full px-3 py-3 transition-all duration-300 hover:scale-105 active:scale-95 md:mr-20 bg-bg-secondary-light dark:bg-bg-secondary-dark text-sm flex gap-2 items-center shadow-shadow-secondary dark:shadow-shadow-secondary-dark"
    >
      <Icons.CheckMark />
      Thank you for liking!
    </motion.div>
  ) : (
    <button
      aria-label="Like"
      onClick={handleLike}
      className="fixed  bottom-8 right-0 z-50 mr-8 rounded-full px-3 py-3 transition-all duration-300 hover:scale-105 active:scale-95 md:mr-20 bg-bg-secondary-light dark:bg-bg-secondary-dark"
    >
      <Icons.Heart />
    </button>
  );
};
export default Like;
