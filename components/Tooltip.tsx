"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ToolTipProps = {
  children: React.ReactNode;
  text: string;
  offset?: number;
};

const ToolTip = ({ children, text, offset }: ToolTipProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center gap-2"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 180 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 10, rotateX: 40 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`absolute bg-bg-primary-light dark:bg-bg-primary-dark px-6 py-2 rounded-2xl shadow-shadow-secondary dark:shadow-shadow-secondary-dark -top-10`}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToolTip;
