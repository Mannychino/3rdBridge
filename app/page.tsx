import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { services } from "@/lib/services";

const icons = [Database, Search, Bot];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* NAV */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
            3B
          </div>
          <span className="text-xl font-semibold tracking-tight">
            3rdBridge
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          <Link href="/marketplace" className="hover:text-black">
            Marketplace
          </Link>
          <Link href="/agent" className="hover:text-black">
            Agent
          </Link>
          <Link href="/sell" className="hover:text-black">
            Sell
          </Link>
        </div>

        <Link
          href="/agent"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
        >
          Launch Agent
        </Link>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 text-center md:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600">
          <Sparkles size={15} />
          Infrastructure for the agent economy
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl">
          The economic layer for
          <span className="block text-neutral-400">
            autonomous agents.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
          Discover services, intelligently route requests and let autonomous
          agents pay for what they need with USDC.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/marketplace"
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
          >
            Explore Marketplace
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/agent"
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium"
          >
            <Bot size={16} />
            Watch an agent transact
          </Link>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <Feature
            icon={<Search size={22} />}
            number="01"
            title="Discover"
            text="Find agents, APIs and data providers based on the capability required."
          />

          <Feature
            icon={<Zap size={22} />}
            number="02"
            title="Route"
            text="Compare price, latency and reputation to choose the best provider."
          />

          <Feature
            icon={<ShieldCheck size={22} />}
            number="03"
            title="Transact"
            text="Settle machine-to-machine payments autonomously using x402 and USDC."
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-medium text-neutral-500">
              MARKETPLACE
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services built for machines.
            </h2>
          </div>

          <Link
            href="/marketplace"
            className="hidden items-center gap-2 text-sm font-medium md:flex"
          >
            View marketplace
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Bot;

            return (
              <Link
                key={service.id}
                href={`/service/${service.id}`}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
                    <Icon size={20} />
                  </div>

                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{service.name}</h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-neutral-500">
                  {service.description}
                </p>

                <div className="mt-8 border-t border-neutral-100 pt-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-neutral-400">PER REQUEST</p>
                      <p className="mt-1 text-xl font-semibold">
                        ${service.price.toFixed(2)}
                        <span className="ml-1 text-xs font-normal text-neutral-400">
                          USDC
                        </span>
                      </p>
                    </div>

                    <div className="text-right text-xs text-neutral-500">
                      <div className="mb-1 flex items-center justify-end gap-1">
                        <Star size={12} />
                        {service.rating}
                      </div>
                      <p>~{service.latency}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] bg-black px-8 py-20 text-center text-white">
          <p className="mb-4 text-sm text-neutral-500">MACHINE COMMERCE</p>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            APIs gave machines a way to communicate.
            <span className="block text-neutral-500">
              3rdBridge gives them a way to trade.
            </span>
          </h2>

          <Link
            href="/agent"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Launch Agent
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-neutral-200 p-8 md:border-b-0 md:border-r last:md:border-r-0">
      <div className="mb-5">{icon}</div>

      <p className="mb-2 text-xs text-neutral-400">{number}</p>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p>
    </div>
  );
}