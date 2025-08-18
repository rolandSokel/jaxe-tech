import About from "@/src/features/About";
import Hero from "@/src/features/Hero";
import Method from "@/src/features/Method";
import Service from "@/src/features/Service";
import WhyChooseUs from "@/src/features/WhyChooseUS";

export default function Home() {
  const heroImages = '/images/hero/hero-bg-cover.png';
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Service />
      <Method />
      <WhyChooseUs />
    </div>
  );
}
