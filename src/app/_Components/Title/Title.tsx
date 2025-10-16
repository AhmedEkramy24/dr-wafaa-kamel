import React from "react";

export default function Title({ children }: { children: string }) {
  return (
    <h1 className="md:text-5xl text-3xl font-bold mb-4 text-slate-200 md:py-8 py-5 text-center title">
      {children}
    </h1>
  );
}
