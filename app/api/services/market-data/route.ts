import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "Crypto Market Data",
    provider: "3rdBridge Demo Provider",
    data: {
      asset: "SOL",
      signal: "Market intelligence successfully unlocked",
      confidence: 0.91,
    },
    payment: {
      protocol: "x402",
      asset: "USDC",
      network: "Solana",
    },
  });
}