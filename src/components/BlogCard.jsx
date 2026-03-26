import { Link } from "react-router-dom";

const catColors = {
  Technology: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Travel: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Lifestyle: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Science: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Culture: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const BlogCard = ({ post, variant = "default" }) => {
  const cc = catColors[post.category] || "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";

  if (variant === "horizontal") {
    return (
      <article className="group flex gap-5 py-6 border-b border-zinc-800 last:border-0">
        <Link to={`/blog/${post.id}`} className="flex-shrink-0 w-24 h-24 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </Link>
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border rounded-sm mb-2 ${cc}`}>{post.category}</span>
            <Link to={`/blog/${post.id}`}>
              <h3 className="font-display text-base font-bold text-white leading-snug group-hover:text-amber-400 transition-colors duration-200 line-clamp-2">{post.title}</h3>
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <img src={post.authorAvatar} alt={post.author} className="w-5 h-5 rounded-full object-cover" />
            <span className="text-xs text-zinc-500">{post.author}</span>
            <span className="text-zinc-700">·</span>
            <span className="text-xs text-zinc-600">{post.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 overflow-hidden flex flex-col">
      <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-video">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border rounded-sm ${cc}`}>{post.category}</span>
          <span className="text-xs text-zinc-600">{post.date}</span>
        </div>
        <Link to={`/blog/${post.id}`} className="flex-1">
          <h3 className="font-display text-xl font-bold text-white leading-snug mb-3 group-hover:text-amber-400 transition-colors duration-200 line-clamp-2">{post.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
        </Link>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-xs text-zinc-400 font-medium">{post.author}</span>
          </div>
          <span className="text-xs text-zinc-600">{post.readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
