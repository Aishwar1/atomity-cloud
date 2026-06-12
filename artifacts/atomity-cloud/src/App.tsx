import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import SavingsCard from "./components/SavingsCard";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Hero />
        <FeatureSection />
        <SavingsCard />
      </main>
    </QueryClientProvider>
  );
}
