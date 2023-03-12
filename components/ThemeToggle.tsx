"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, LightBlob } from "components/icons";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      whileTap={{ scale: 0.7, rotate: -30, elevation: 10 }}
      transition={{ duration: 0.3, damping: 10 }}
    >
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-12 h-12 p-3 rounded-full bg-bg-secondary-light dark:bg-bg-secondary-dark active:scale-90 transition-all duration-200 hover:scale-105 ring-0 hover:ring-2 ring-bg-secondary-dark/10 dark:ring-bg-secondary-light/10"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? <LightBlob /> : <Moon />}
        </button>
      )}
    </motion.div>
  );
};

export default ThemeToggle;
