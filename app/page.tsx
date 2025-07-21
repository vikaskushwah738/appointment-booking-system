import CTA from "@/components/CTA";
import Features from "@/components/Features";
import HereSection from "@/components/HereSection";
import Prices from "@/components/Price";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-background">
      <HereSection />
      <Features />
      <Prices />
      <Testimonials />
      <CTA />
    </main>
  );
}
