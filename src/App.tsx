import { Hero } from "./components/landing/Hero";
import { Problem } from "./components/landing/Problem";
import { Features } from "./components/landing/Features";
import { ForWhom } from "./components/landing/ForWhom";
import { Expectations } from "./components/landing/Expectations";
import { Bonuses } from "./components/landing/Bonuses";
import { Pricing } from "./components/landing/Pricing";
import { Recap } from "./components/landing/Recap";
import { FAQ } from "./components/landing/FAQ";
import { Footer } from "./components/landing/Footer";
import { BrandLogo } from "./components/ui/BrandLogo";

function App() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
      <BrandLogo 
        size="xl" 
        className="absolute top-4 right-4 z-50 pointer-events-none opacity-90" 
      />
      <Hero />
      <Problem />
      <Features />
      <ForWhom />
      <Expectations />
      <Bonuses />
      <Pricing />
      <Recap />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
