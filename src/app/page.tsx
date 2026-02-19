import { HeroHook } from "@/components/sections/HeroHook";
import { EpiphanyStory } from "@/components/sections/EpiphanyStory";
import { ThreeSecrets } from "@/components/sections/ThreeSecrets";
import { TheStack } from "@/components/sections/TheStack";
import { Testimonials, CallToAction } from "@/components/sections/CtaComponents";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-earth-cream text-celestial-deep overflow-hidden">
      <HeroHook />
      <EpiphanyStory />
      <ThreeSecrets />
      <TheStack />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
