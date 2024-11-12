"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react"; // Adjust based on your icon library

export default function ScrollButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  // Function to handle scrolling based on the current scroll position
  const handleScroll = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Detect the scroll position to toggle button behavior
  const toggleScrollPosition = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true); // At the top of the page
    } else if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight
    ) {
      setIsAtTop(false); // At the bottom of the page
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollPosition);
    return () => window.removeEventListener("scroll", toggleScrollPosition);
  }, []);

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-4 right-4 bg-transparent text-blue-800 p-2 rounded-full shadow-lg hover:bg-transparent transition-colors duration-300"
      aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
    >
      {isAtTop ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
    </button>
  );
}
