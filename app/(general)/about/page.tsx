import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ["About", "Page"],
};

export default function About() {
  return (
    <>
      <span className="text-5xl font-bold">About Page</span>
    </>
  );
}
