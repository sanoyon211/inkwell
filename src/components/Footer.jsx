import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="group flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-amber-400 rotate-45 group-hover:rotate-0 transition-transform duration-500"></div>
              <span className="font-display text-2xl font-bold text-white">Inkwell</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              A publication for curious minds. We explore ideas in technology, design, culture, and science.
            </p>
            <div className="flex gap-4 mt-6">
              {["Twitter", "Instagram", "RSS"].map((s) => (
                <a key={s} href="#" className="text-xs text-zinc-500 hover:text-amber-400 uppercase tracking-widest transition-colors duration-200">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[{ label: "Home", to: "/" }, { label: "All Articles", to: "/blog" }, { label: "About", to: "/about" }, { label: "Contact", to: "/contact" }].map((l) => (
                <li key={l.to}><Link to={l.to} className="text-sm text-zinc-500 hover:text-white transition-colors duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Categories</h4>
            <ul className="space-y-3">
              {["Technology", "Design", "Travel", "Science", "Culture", "Lifestyle"].map((cat) => (
                <li key={cat}><Link to={`/blog?category=${cat}`} className="text-sm text-zinc-500 hover:text-white transition-colors duration-200">{cat}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© {year} Inkwell. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
