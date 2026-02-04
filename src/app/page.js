import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Differentiation from "@/components/Differentiation";
import HowItWorks from "@/components/HowItWorks";
import WhoItIsFor from "@/components/WhoItIsFor";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Problem />
      <Differentiation />
      <HowItWorks />
      <WhoItIsFor />
      <Trust />
      <Footer />
    </main>
  );
}
