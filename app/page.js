import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials/>
    </>
  );
}
