import About from "@/src/features/About";
import Hero from "@/src/features/Hero";
import Method from "@/src/features/Method";
import Service from "@/src/features/Service";
import Image from "next/image";

export default function Home() {
  const heroImages =  '/images/hero/hero-bg-cover.png';
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Hero/>
      <About/>
      <Service/>
      <Method/>
      <div className="w-full h-96 bg-amber-500"></div>
    </div>
  );
}
