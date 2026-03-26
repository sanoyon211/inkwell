import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getPostsByCategory } from "../data/posts";
import BlogCard from "../components/BlogCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";

const BlogList = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = getPostsByCategory(activeCategory).filter((post) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.author.toLowerCase().includes(q);
  });

  return (
    <main className="min-h-screen bg-zinc-950">
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-zinc-800">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">✦ The Archive</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-none">All Articles</h1>
          <p className="text-zinc-500 text-sm">{filtered.length} article{filtered.length !== 1 ? "s" : ""} found</p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 min-w-0"><CategoryFilter active={activeCategory} onChange={setActiveCategory} /></div>
          <div className="w-full sm:w-64 flex-shrink-0"><SearchBar onSearch={setSearchQuery} /></div>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto py-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-zinc-400 font-semibold mb-2">No articles found</p>
            <p className="text-zinc-600 text-sm">Try adjusting your search or selecting a different category.</p>
            <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-6 px-5 py-2 border border-zinc-700 text-zinc-400 text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-200">
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogList;
