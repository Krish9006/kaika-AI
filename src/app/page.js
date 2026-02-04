"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Differentiation from "@/components/Differentiation";
import HowItWorks from "@/components/HowItWorks";
import WhoItIsFor from "@/components/WhoItIsFor";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero onOpenModal={openModal} />
      <Problem />
      <Differentiation />
      <HowItWorks />
      <WhoItIsFor />
      <Trust />
      <Footer onOpenModal={openModal} />

      <EarlyAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
