import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page",
  keywords: ["Contact", "Page"],
};

export default function Contact() {
  return (
    <>
      <span className="text-5xl font-bold">Contact Page</span>
    </>
  );
}
