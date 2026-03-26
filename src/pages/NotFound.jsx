import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-[10rem] md:text-[14rem] font-bold text-zinc-900 leading-none select-none">404</p>
        <div className="flex items-center justify-center gap-4 -mt-6 mb-8">
          <div className="w-16 h-px bg-zinc-800"></div>
          <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
          <div className="w-16 h-px bg-zinc-800"></div>
        </div>
        <h1 className="font-display text-3xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto mb-10">The page you're looking for doesn't exist or may have been moved.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="px-8 py-3 bg-amber-400 text-zinc-950 text-sm font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors duration-200">Go Home</Link>
          <Link to="/blog" className="px-8 py-3 border border-zinc-700 text-white text-sm font-bold uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all duration-200">Browse Articles</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
