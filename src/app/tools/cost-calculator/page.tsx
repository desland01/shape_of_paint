import type { Metadata } from "next";
import { CostCalculatorApp } from "@/components/tools/CostCalculatorApp";

export const metadata: Metadata = {
  title: "Interior Painting Cost Calculator",
  description:
    "Room-by-room interior painting cost calculator using labor, material, and coverage assumptions for transparent estimates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CostCalculatorPage() {
  return <CostCalculatorApp />;
}
