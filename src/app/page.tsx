import Footer from "@/components/Home/Footer";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import TrustedBy from "../components/Home/TrustedBy";
import Articles from "@/components/Home/Articles";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <HeroSection />
      <TrustedBy />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}
