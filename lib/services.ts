export type Service = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: "USDC";
  latency: string;
  rating: number;
  endpoint: string;
};

export const services: Service[] = [
  {
    id: "solana-intelligence",
    name: "Solana Intelligence",
    description:
      "Analyze wallets, tokens, protocols and onchain activity across Solana.",
    category: "Blockchain Data",
    price: 0.05,
    currency: "USDC",
    latency: "2.1s",
    rating: 4.9,
    endpoint: "/api/services/solana-intelligence",
  },
  {
    id: "research-agent",
    name: "Research Agent",
    description:
      "Autonomous web research and information retrieval for AI agents.",
    category: "Research",
    price: 0.08,
    currency: "USDC",
    latency: "4.3s",
    rating: 4.8,
    endpoint: "/api/services/research",
  },
  {
    id: "market-data",
    name: "Crypto Market Data",
    description:
      "Real-time token prices and market intelligence for autonomous applications.",
    category: "Market Data",
    price: 0.02,
    currency: "USDC",
    latency: "800ms",
    rating: 4.7,
    endpoint: "/api/services/market-data",
  },
];