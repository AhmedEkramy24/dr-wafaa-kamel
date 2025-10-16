import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import LinksSR from "./LinksSR";

export default function Navbar() {
  return (
    <nav className="border border-b border-slate-300">
      <div className="container mx-auto flex justify-between items-center p-3 ">
        <Logo />
        <Links />
      </div>
      <div className="h-[1px] bg-slate-300"></div>
      <div className="container flex justify-end">
        <LinksSR />
      </div>
    </nav>
  );
}
