"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }

  return (
    <FiSun
      className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
      onClick={() => setTheme("light")}
    />
  );
}
