import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import SavingsCard from "./components/SavingsCard";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Background />
      <Nav />
      <main>
        <Hero />
        <FeatureSection />
        <SavingsCard />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
