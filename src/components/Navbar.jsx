import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Articles", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-7 h-7 bg-amber-400 rotate-45 group-hover:rotate-0 transition-transform duration-500"></div>
            <span className="font-display text-2xl font-bold text-white tracking-tight">Inkwell</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${isActive(link.to) ? "text-amber-400" : "text-zinc-400 hover:text-white"}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400 transition-all duration-200">
              {isDark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71M17.66 17.66l.71.71M6.34 6.34l.71-.71M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Link to="/blog" className="px-5 py-2 bg-amber-400 text-zinc-950 text-sm font-bold tracking-wider uppercase hover:bg-amber-300 transition-colors duration-200">
              Read
            </Link>
          </div>

          <button className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}></span>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {navLinks.map((link, i) => (
          <Link key={link.to} to={link.to}
            className={`font-display text-4xl font-bold transition-colors duration-200 ${isActive(link.to) ? "text-amber-400" : "text-zinc-300 hover:text-white"}`}
            style={{ transitionDelay: `${i * 60}ms` }}>
            {link.label}
          </Link>
        ))}
        <button onClick={toggleTheme} className="mt-4 text-zinc-400 hover:text-amber-400 transition-colors text-sm uppercase tracking-widest">
          {isDark ? "☀ Light Mode" : "☾ Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
