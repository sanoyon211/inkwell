import { useEffect } from "react";
import { Link } from "react-router-dom";

const team = [
  {
    name: 'Aria Chen',
    role: 'Lead Designer & Writer',
    bio: 'Senior Product Designer at Figma. Writes about design systems and the intersection of art and technology.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Marcus Webb',
    role: 'Technology Editor',
    bio: 'Machine Learning Engineer. Passionate about making AI concepts accessible to everyone.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Sofia Nakamura',
    role: 'Travel & Culture Writer',
    bio: 'Travel writer and photographer. Has visited 67 countries. Based between London and Tokyo.',
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
  {
    name: 'Dr. James Okoro',
    role: 'Science Editor',
    bio: 'Bioethicist and science communicator. PhD in Molecular Biology from MIT.',
    avatar: 'https://i.pravatar.cc/150?img=17',
  },
];

const values = [
  { icon: "✦", title: "Depth over volume", desc: "We'd rather publish one excellent piece than ten adequate ones. Every article represents serious research and careful writing." },
  { icon: "◈", title: "Intellectual honesty", desc: "We follow evidence where it leads, acknowledge uncertainty, and correct our mistakes publicly and promptly." },
  { icon: "◇", title: "Genuine curiosity", desc: "We write about things that genuinely fascinate us — not what's trending or what drives clicks." },
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">✦ Our Story</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none">About<br />Inkwell</h1>
          <div className="md:border-l md:border-zinc-800 md:pl-12">
            <p className="text-zinc-400 text-base leading-relaxed mb-4">Inkwell was founded in 2024 by a small group of writers, designers, and researchers who believed the internet needed more depth and less noise.</p>
            <p className="text-zinc-500 text-sm leading-relaxed">We cover technology, design, science, travel, lifestyle, and culture — because the most interesting ideas live at the intersections between disciplines.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 max-w-7xl mx-auto py-20 border-y border-zinc-800">
        <h2 className="font-display text-3xl font-bold text-white mb-12">What we believe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="group">
              <div className="text-amber-400 text-2xl mb-5">{v.icon}</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 max-w-7xl mx-auto py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl font-bold text-white">The Team</h2>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden mb-5">
                <img src={member.avatar} alt={member.name} className="w-full aspect-square object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 border border-zinc-800 group-hover:border-amber-400/30 transition-colors duration-300"></div>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-7xl mx-auto pb-24 text-center">
        <div className="bg-zinc-900 border border-zinc-800 p-12 md:p-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Join our community</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">12,000 readers receive our weekly digest. No spam — just the ideas worth your time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-amber-400 text-zinc-950 text-sm font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors">Get In Touch</Link>
            <Link to="/blog" className="px-8 py-3 border border-zinc-700 text-white text-sm font-bold uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all duration-200">Read Articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
