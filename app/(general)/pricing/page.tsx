import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing Page",
  keywords: ["Pricing", "Page"],
};

export default function Pricing() {
  return (
    <>
      <span className="text-5xl font-bold">Pricing Page</span>
    </>
  );
}
