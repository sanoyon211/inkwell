import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => { setQuery(e.target.value); onSearch(e.target.value); };
  const handleClear = () => { setQuery(""); onSearch(""); };
  return (
    <div className="relative">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" value={query} onChange={handleChange} placeholder="Search articles..."
        className="w-full bg-zinc-900 border border-zinc-700 pl-11 pr-10 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-amber-400 transition-colors duration-200" />
      {query && (
        <button onClick={handleClear} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
