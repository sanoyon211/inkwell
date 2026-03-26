import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPostById, getRelatedPosts } from "../data/posts";
import BlogCard from "../components/BlogCard";

const catColors = {
  Technology: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Travel: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Lifestyle: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Science: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Culture: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!post) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-7xl font-bold text-zinc-800 mb-4">404</p>
          <p className="text-zinc-500 mb-6">Article not found.</p>
          <Link to="/blog" className="text-amber-400 text-sm hover:underline">← Back to articles</Link>
        </div>
      </main>
    );
  }

  const related = getRelatedPosts(post, 3);
  const cc = catColors[post.category] || "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="relative h-64 md:h-[480px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950"></div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 -mt-16 relative z-10">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border rounded-sm ${cc}`}>{post.category}</span>
          <span className="text-zinc-600 text-xs">·</span>
          <span className="text-xs text-zinc-500">{post.date}</span>
          <span className="text-zinc-600 text-xs">·</span>
          <span className="text-xs text-zinc-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">{post.title}</h1>

        {/* Excerpt */}
        <p className="text-zinc-400 text-lg leading-relaxed mb-8 border-l-2 border-amber-400 pl-5">{post.excerpt}</p>

        {/* Author */}
        <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 mb-12">
          <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm">{post.author}</p>
            <p className="text-zinc-500 text-xs leading-relaxed mt-0.5">{post.authorBio}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 bg-amber-400 rotate-45"></div>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        {/* Content */}
        <div className="prose-custom" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-zinc-800">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-zinc-500 border border-zinc-700 px-3 py-1 hover:border-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 mt-8 mb-20">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Share</span>
          <div className="flex-1 h-px bg-zinc-800"></div>
          <button className="text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">Twitter</button>
          <button className="text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">Facebook</button>
          <button onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="text-xs text-zinc-500 hover:text-amber-400 uppercase tracking-widest transition-colors">Copy Link</button>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-display text-2xl font-bold text-white">Related Articles</h2>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>
        </section>
      )}

      {/* Back */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back
        </button>
      </div>
    </main>
  );
};

export default BlogDetail;
