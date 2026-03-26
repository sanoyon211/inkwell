import { useState, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setStatus(null); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    setStatus("loading");
    setTimeout(() => { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); }, 1500);
  };

  const info = [
    { label: "Email", value: "hello@inkwell.pub" },
    { label: "Location", value: "Remote — Worldwide" },
    { label: "Response time", value: "Within 48 hours" },
  ];

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-zinc-800">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">✦ Reach Out</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-none">Let's<br />talk.</h1>
          <p className="text-zinc-500 text-sm leading-relaxed md:border-l md:border-zinc-800 md:pl-12">Whether you have a story pitch, collaboration idea, or just want to say hello — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-white mb-8">Get in touch</h2>
            <div className="space-y-6 mb-10">
              {info.map((i) => (
                <div key={i.label}>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">{i.label}</p>
                  <p className="text-zinc-300 text-sm">{i.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6">
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-3">For writers</p>
              <p className="text-zinc-500 text-sm leading-relaxed">We accept pitches for essays, features, and reported pieces. Please include a brief summary and 2–3 writing samples.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 border border-amber-400/30 bg-amber-400/5 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Message sent!</h3>
                <p className="text-zinc-500 text-sm max-w-sm">Thank you for reaching out. We'll get back to you within 48 hours.</p>
                <button onClick={() => setStatus(null)} className="mt-8 px-6 py-2.5 border border-zinc-700 text-zinc-400 text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-200">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-amber-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                      className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-amber-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?"
                    className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-amber-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell us what's on your mind..."
                    className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-amber-400 transition-colors resize-none" />
                </div>
                {status === "error" && <p className="text-red-400 text-xs">Please fill in all required fields.</p>}
                <button type="submit" disabled={status === "loading"}
                  className="w-full py-4 bg-amber-400 text-zinc-950 text-sm font-bold uppercase tracking-wider hover:bg-amber-300 disabled:opacity-70 transition-all duration-200 flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
