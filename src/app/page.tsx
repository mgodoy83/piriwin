import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Catalog from "@/components/Catalog";
import Guarantee from "@/components/Guarantee";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Catalog />
      <Guarantee />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
