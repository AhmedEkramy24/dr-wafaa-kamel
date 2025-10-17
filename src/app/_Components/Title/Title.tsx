import React from "react";

export default function Title({ children }: { children: string }) {
  return (
    <h1 className="md:text-5xl text-2xl font-bold mb-4 text-slate-100 md:py-8 py-4 text-center title">
      {children}
    </h1>
  );
}
