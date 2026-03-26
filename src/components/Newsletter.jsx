import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) { setStatus("error"); return; }
    setStatus("loading");
    setTimeout(() => { setStatus("success"); setEmail(""); }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-900 border border-zinc-800 py-16 my-16">
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"></div>
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-10 h-px bg-amber-400/40"></div>
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Newsletter</span>
          <div className="w-10 h-px bg-amber-400/40"></div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Ideas worth reading,<br />delivered weekly.</h2>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">Join over 12,000 readers who get our best essays on technology, design, and culture — every Sunday morning.</p>
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold">You're on the list!</p>
            <p className="text-zinc-500 text-sm">Check your inbox for a confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus(null); }} placeholder="your@email.com"
              className={`flex-1 bg-zinc-800 border px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-amber-400 transition-colors duration-200 ${status === "error" ? "border-red-500" : "border-zinc-700"}`} />
            <button type="submit" disabled={status === "loading"}
              className="px-6 py-3 bg-amber-400 text-zinc-950 text-sm font-bold uppercase tracking-wider hover:bg-amber-300 disabled:opacity-70 transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0">
              {status === "loading" ? (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && <p className="text-red-400 text-xs mt-2">Please enter a valid email address.</p>}
        <p className="text-zinc-700 text-xs mt-4">No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
};

export default Newsletter;
