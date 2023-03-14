"use client";
import Icons from "components/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSWRConfig } from "swr";

type LikeProps = {
  slug: string;
};

const Like = ({ slug }: LikeProps) => {
  const [{ liked, hide }, setState] = useState({
    liked: false,
    hide: false,
  });
  const { mutate } = useSWRConfig();
  const handleLike = async () => {
    setState({ liked: true, hide: false });
    await fetch(`/api/likes/${slug}`, {
      method: "PUT",
    });
    mutate("/api/post/" + slug);
  };
  return liked ? (
    <AnimatePresence mode="wait">
      {!hide && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 right-0 z-50 mr-8 rounded-full px-3 py-3 transition-all duration-300 hover:scale-105 active:scale-95 md:mr-20 bg-bg-secondary-light/20 dark:bg-bg-secondary-dark/20 text-sm flex gap-2 items-center shadow-shadow-secondary dark:shadow-shadow-secondary-dark backdrop-filter backdrop-blur-xl"
        >
          <Icons.CheckMark />
          Thank you for liking!
          <button
            aria-label="Close"
            onClick={() => setState({ liked: true, hide: true })}
            className="ml-auto"
          >
            <Icons.Close />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
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
