import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="font-bold text-blue-800  logo text-nowrap">
        {" "}
        د / وفاء كامل
      </h1>
    </Link>
  );
}
