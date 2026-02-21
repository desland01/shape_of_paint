import type { Metadata } from "next";
import { CostCalculatorApp } from "@/components/tools/CostCalculatorApp";
import { ViewportFitWrapper } from "@/components/shared/ViewportFitWrapper";

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
  return (
    <ViewportFitWrapper>
      <div className="mx-auto h-full flex flex-col max-w-content px-4 md:px-8 py-8">
        <CostCalculatorApp />
      </div>
    </ViewportFitWrapper>
  );
}
