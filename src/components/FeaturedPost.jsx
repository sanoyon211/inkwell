import { Link } from "react-router-dom";

const catColors = {
  Technology: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Travel: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Lifestyle: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Science: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Culture: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const FeaturedPost = ({ post }) => {
  const cc = catColors[post.category] || "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  return (
    <article className="group relative overflow-hidden min-h-[500px] flex items-end">
      <div className="absolute inset-0">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 to-transparent"></div>
      </div>
      <div className="relative z-10 p-8 md:p-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">✦ Featured</span>
          <span className="w-6 h-px bg-amber-400/40"></span>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border rounded-sm ${cc}`}>{post.category}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-3 group-hover:text-amber-100 transition-colors duration-300">{post.title}</h2>
        </Link>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 hidden md:block">{post.excerpt}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full object-cover border-2 border-amber-400/30" />
            <div>
              <p className="text-xs font-semibold text-white">{post.author}</p>
              <p className="text-xs text-zinc-500">{post.date}</p>
            </div>
          </div>
          <span className="text-zinc-700">·</span>
          <span className="text-xs text-zinc-500">{post.readTime}</span>
          <Link to={`/blog/${post.id}`} className="ml-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 hover:gap-4 transition-all duration-200">
            Read
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
