"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Check,
  CircleDollarSign,
  Loader2,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Understanding task",
    description: "Breaking the request into required capabilities.",
    icon: <Sparkles size={17} />,
  },
  {
    id: 2,
    title: "Discovering services",
    description: "Searching the 3rdBridge service network.",
    icon: <Search size={17} />,
  },
  {
    id: 3,
    title: "Routing request",
    description: "Comparing providers by price, latency and reputation.",
    icon: <Zap size={17} />,
  },
  {
    id: 4,
    title: "Payment requested",
    description: "Provider returned HTTP 402 Payment Required.",
    icon: <CircleDollarSign size={17} />,
  },
  {
    id: 5,
    title: "Checking policy",
    description: "Validating payment against agent spending limits.",
    icon: <ShieldCheck size={17} />,
  },
  {
    id: 6,
    title: "Settling payment",
    description: "Paying the provider $0.02 USDC on Solana.",
    icon: <Wallet size={17} />,
  },
  {
    id: 7,
    title: "Resource unlocked",
    description: "Payment verified. Premium resource returned.",
    icon: <Check size={17} />,
  },
];

const providers = [
  {
    name: "Solana Intelligence",
    price: "$0.05",
    latency: "2.1s",
    rating: "4.9",
  },
  {
    name: "Crypto Market Data",
    price: "$0.02",
    latency: "0.8s",
    rating: "4.7",
  },
  {
    name: "Research Agent",
    price: "$0.08",
    latency: "4.3s",
    rating: "4.8",
  },
];

export default function AgentPage() {
  const [task, setTask] = useState(
    "Research the current Solana DeFi market and identify key market signals."
  );

  const [budget, setBudget] = useState("0.50");
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);

  async function runAgent() {
    if (running) return;

    setRunning(true);
    setFinished(false);
    setCurrentStep(0);

    for (let i = 1; i <= steps.length; i++) {
      setCurrentStep(i);

      await new Promise((resolve) =>
        setTimeout(resolve, i === 6 ? 1600 : 900)
      );
    }

    setFinished(true);
    setRunning(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <nav className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
              3B
            </div>

            <span className="text-lg font-semibold">3rdBridge</span>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Agent online
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black"
        >
          <ArrowLeft size={15} />
          Back
        </Link>

        <div className="mb-10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
            <Bot size={22} />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Autonomous Buyer Agent
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-500">
            Give the agent a task and spending budget. 3rdBridge discovers,
            routes and purchases the services required to complete it.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* CONTROL PANEL */}

          <section className="h-fit rounded-3xl border border-neutral-200 bg-white p-6">
            <p className="mb-5 text-xs font-medium uppercase tracking-wider text-neutral-400">
              Agent task
            </p>

            <label className="mb-2 block text-sm font-medium">Task</label>

            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              rows={5}
              disabled={running}
              className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 outline-none transition focus:border-neutral-400"
            />

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">
                Maximum spending budget
              </label>

              <div className="flex items-center rounded-2xl border border-neutral-200 bg-neutral-50 px-4">
                <span className="text-neutral-400">$</span>

                <input
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  disabled={running}
                  className="w-full bg-transparent px-2 py-4 text-sm outline-none"
                />

                <span className="text-xs font-medium text-neutral-400">
                  USDC
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Network</span>
                <span className="font-medium">Solana</span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-neutral-500">Payment</span>
                <span className="font-medium">x402</span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-neutral-500">Max per payment</span>
                <span className="font-medium">$0.10</span>
              </div>
            </div>

            <button
              onClick={runAgent}
              disabled={running}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-500"
            >
              {running ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Agent running
                </>
              ) : (
                <>
                  <Sparkles size={17} />
                  {finished ? "Run again" : "Run Agent"}
                </>
              )}
            </button>
          </section>

          {/* EXECUTION */}

          <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
              <div>
                <h2 className="font-semibold">Execution</h2>

                <p className="mt-1 text-xs text-neutral-400">
                  Live agent activity
                </p>
              </div>

              <div className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-500">
                {finished
                  ? "Complete"
                  : running
                    ? "Running"
                    : "Waiting"}
              </div>
            </div>

            <div className="p-6">
              {currentStep === 0 ? (
                <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100">
                    <Bot size={22} className="text-neutral-400" />
                  </div>

                  <h3 className="font-medium">Ready to transact</h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-400">
                    Start the agent to discover services and autonomously
                    purchase the resources required for the task.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="space-y-2">
                    {steps.map((step) => {
                      const completed = currentStep > step.id;
                      const active =
                        currentStep === step.id && !finished;

                      return (
                        <div
                          key={step.id}
                          className={`flex gap-4 rounded-2xl p-4 transition ${
                            active ? "bg-neutral-50" : ""
                          }`}
                        >
                          <div
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                              completed || finished
                                ? "bg-black text-white"
                                : active
                                  ? "bg-neutral-200 text-black"
                                  : "bg-neutral-100 text-neutral-300"
                            }`}
                          >
                            {completed || finished ? (
                              <Check size={15} />
                            ) : active ? (
                              <Loader2
                                size={15}
                                className="animate-spin"
                              />
                            ) : (
                              step.icon
                            )}
                          </div>

                          <div>
                            <p
                              className={`text-sm font-medium ${
                                !completed &&
                                !active &&
                                !finished
                                  ? "text-neutral-300"
                                  : ""
                              }`}
                            >
                              {step.title}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-neutral-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* PROVIDER DISCOVERY */}

                  {currentStep >= 3 && (
                    <div className="mt-6 rounded-2xl border border-neutral-200 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-medium">
                          Providers discovered
                        </p>

                        <span className="text-xs text-neutral-400">
                          3 matches
                        </span>
                      </div>

                      <div className="space-y-2">
                        {providers.map((provider) => {
                          const selected =
                            provider.name === "Crypto Market Data";

                          return (
                            <div
                              key={provider.name}
                              className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-xl px-3 py-3 text-xs ${
                                selected
                                  ? "bg-black text-white"
                                  : "bg-neutral-50"
                              }`}
                            >
                              <span className="font-medium">
                                {provider.name}
                              </span>

                              <span>{provider.price}</span>

                              <span
                                className={
                                  selected
                                    ? "text-neutral-400"
                                    : "text-neutral-400"
                                }
                              >
                                {provider.latency}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 402 PAYMENT */}

                  {currentStep >= 4 && (
                    <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-950 p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-neutral-500">
                            HTTP RESPONSE
                          </p>

                          <p className="mt-1 font-mono text-sm">
                            402 Payment Required
                          </p>
                        </div>

                        <CircleDollarSign size={21} />
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <PaymentStat label="AMOUNT" value="$0.02" />
                        <PaymentStat label="ASSET" value="USDC" />
                        <PaymentStat label="NETWORK" value="Solana" />
                      </div>
                    </div>
                  )}

                  {/* RESULT */}

                  {finished && (
                    <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-green-800">
                        <Check size={17} />
                        Resource unlocked
                      </div>

                      <p className="mt-3 text-sm leading-6 text-green-900">
                        Market intelligence successfully purchased and returned
                        to the agent.
                      </p>

                      <div className="mt-4 border-t border-green-200 pt-4">
                        <div className="flex justify-between text-xs">
                          <span className="text-green-700">
                            Total spent
                          </span>

                          <span className="font-semibold text-green-900">
                            $0.02 / ${budget} USDC
                          </span>
                        </div>

                        <div className="mt-2 flex justify-between text-xs">
                          <span className="text-green-700">
                            Transaction
                          </span>

                          <span className="font-mono text-green-900">
                            4hT...9Km
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function PaymentStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-neutral-900 p-3">
      <p className="text-[10px] text-neutral-500">{label}</p>
      <p className="mt-1 text-xs font-medium">{value}</p>
    </div>
  );
}