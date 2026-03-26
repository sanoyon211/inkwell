import { categories } from "../data/posts";

const CategoryFilter = ({ active, onChange }) => (
  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
    {categories.map((cat) => (
      <button key={cat} onClick={() => onChange(cat)}
        className={`flex-shrink-0 text-xs font-bold uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${active === cat ? "bg-amber-400 text-zinc-950 border-amber-400" : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white"}`}>
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
