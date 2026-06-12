import { useQuery } from "@tanstack/react-query";

async function fetchMetrics() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export function useMetrics() {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
    staleTime: 1000 * 60 * 5,
  });
}
