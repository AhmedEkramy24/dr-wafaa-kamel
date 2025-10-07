import React from "react";
import Logo from "./Logo";
import Links from "./Links";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center p-3 border-b border-b-slate-300">
        <Logo />
        <Links />
      </div>
    </nav>
  );
}
