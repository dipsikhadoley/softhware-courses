import ChooseUs from "@/components/ChooseUs";
import FeaturedCoures from "@/components/FeaturedCoures";
import HeroSection from "@/components/HeroSection";
import Scrolling from "@/components/Scrolling";
import UpcomingWeb from './../components/UpcomingWeb';
import Harmoni from './../components/Harmoni';
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96 antialiased bg-grid-white/[0.03">
   <HeroSection/>
   <FeaturedCoures/>
   <ChooseUs/>
   <Scrolling/>
   <UpcomingWeb/>
   <Harmoni/>
   <Footer/>
  </main>
  );
}
