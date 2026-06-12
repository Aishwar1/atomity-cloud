import { useQuery } from "@tanstack/react-query";

export type MetricData = {
  cpu: number;
  memory: number;
  storage: number;
  network: number;
};

async function fetchMetrics(): Promise<MetricData> {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  if (!res.ok) throw new Error("Failed to fetch metrics");
  const data = await res.json();
  const products = data.products;

  const derive = (i: number, base: number) => {
    const raw = Math.round(products[i].rating * 20);
    return Math.min(99, Math.max(12, (raw + base) % 100 || base));
  };

  return {
    cpu: derive(0, 74),
    memory: derive(1, 61),
    storage: derive(2, 83),
    network: derive(3, 47),
  };
}

export function useMetrics() {
  return useQuery<MetricData>({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
