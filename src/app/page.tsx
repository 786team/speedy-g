import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] -z-10">
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-60" />
        <div className="absolute inset-0 bg-grid-fade" />
      </div>
      <Nav />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
