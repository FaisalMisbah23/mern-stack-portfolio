import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();
  const isBlogsPage = location.pathname.startsWith("/blogs");

  // Set the theme on initial load
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";

    // Apply the "dark" class to the <html> tag if the theme is dark
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const containerBgClass = isBlogsPage
    ? "bg-white dark:bg-[#262626]"
    : "bg-[#262626]";

  console.log("containerBgClass", containerBgClass);

  return (
    <div
      className={`h-screen w-full flex items-center justify-center ${containerBgClass}`}
    >
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[#9ACD32] animate-bounce"></div>
        <div
          className="w-4 h-4 rounded-full bg-[#9ACD32] animate-bounce"
          style={{ animationDelay: "-0.3s" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full bg-[#9ACD32] animate-bounce"
          style={{ animationDelay: "-0.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
