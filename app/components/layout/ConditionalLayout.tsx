import React from "react";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  return (
    <div className="mx-auto max-w-md bg-background min-h-screen relative! overflow-hidden">
      {children}
    </div>
  );
}
