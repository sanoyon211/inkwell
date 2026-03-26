import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 bg-amber-400 text-zinc-950 flex items-center justify-center hover:bg-amber-300 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
