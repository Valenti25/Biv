import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/navbar";
import ConditionalLayout from "../components/layout/ConditionalLayout";

export const metadata: Metadata = {
  title: "biv",
  description: "biv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <ConditionalLayout>
          <Navbar />
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
