import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Team - The Creative Clowns",
  description: "Meet the talented individuals behind The Creative Clowns - a team of passionate creators, strategists, and innovators.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--dark)]">
        {/* Hero Section */}
        <section className="bg-[var(--dark)] text-white pt-32 pb-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <span className="eyebrow">Meet the team</span>
            <h1 className="headline-xl mb-6">
              The Creative <span className="text-[var(--brand-purple)]">Squad</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              We're a diverse team of strategists, designers, developers, and storytellers united by one mission: to transform brands through creativity and innovation. Get to know the people who make the magic happen.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <Team />

        {/* Join Us Section */}
        <section className="bg-[var(--dark)] text-white section-pad border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="headline-lg mb-6">
              Want to <span className="text-[var(--brand-cyan)]">Join Us?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We're always looking for talented individuals who share our passion for creativity and innovation. If you think you'd be a great fit for our squad, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-[var(--brand-purple)] text-white font-display font-semibold hover:bg-[var(--brand-cyan)] transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
