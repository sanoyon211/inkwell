import { Link } from "react-router-dom";
import { getFeaturedPosts, posts } from "../data/posts";
import FeaturedPost from "../components/FeaturedPost";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const featured = getFeaturedPosts();
  const latest = posts.filter((p) => !p.featured).slice(0, 4);
  const sidebar = posts.slice(2, 6);

  return (
    <main className="min-h-screen bg-zinc-950">
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">✦ Est. 2024 ✦</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none">
              Ideas that<br /><span className="text-amber-400">matter.</span>
            </h1>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">Deep reads on technology, design, science, and culture — written for the genuinely curious.</p>
        </div>
        <div className="flex items-center gap-8 pb-12 border-b border-zinc-800">
          {[{ num: "120+", label: "Articles" }, { num: "12k", label: "Readers" }, { num: "6", label: "Categories" }, { num: "Weekly", label: "Updates" }].map((s) => (
            <div key={s.label} className="hidden sm:block">
              <p className="font-display text-xl font-bold text-white">{s.num}</p>
              <p className="text-xs text-zinc-600 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
          <div className="ml-auto">
            <Link to="/blog" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 hover:gap-4 transition-all duration-200">
              All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          {featured.map((post) => <FeaturedPost key={post.id} post={post} />)}
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-2xl font-bold text-white">Latest Articles</h2>
          <div className="flex-1 h-px bg-zinc-800"></div>
          <Link to="/blog" className="text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">View all →</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latest.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
          <div className="lg:border-l lg:border-zinc-800 lg:pl-8">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Also Worth Reading</h3>
            {sidebar.map((post) => <BlogCard key={post.id} post={post} variant="horizontal" />)}
          </div>
        </div>
      </section>

      <div className="px-6 max-w-7xl mx-auto"><Newsletter /></div>

      <section className="px-6 max-w-7xl mx-auto pb-20 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-white text-sm font-bold uppercase tracking-widest hover:border-amber-400 hover:text-amber-400 transition-all duration-200">
          Browse All Articles
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </main>
  );
};

export default Home;
