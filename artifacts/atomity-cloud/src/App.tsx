import Nav from "./components/Nav";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import FeatureSection from "./components/FeatureSection";
import SavingsCard from "./components/SavingsCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Logos />
        <FeatureSection />
        <SavingsCard />
      </main>
      <Footer />
    </>
  );
}
