import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallary";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Publications from "@/components/Publicaion";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Publications />
      <Gallery />
      <Testimonials />
      <Contact/>
    </>
  );
}
