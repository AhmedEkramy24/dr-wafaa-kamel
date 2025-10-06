"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/cv", label: "السيرة الذاتية" },
  { href: "/awards", label: "الجوائز" },
  { href: "/certificates", label: "شهادات تقدير" },
  { href: "/programes", label: "برامج لغوية حاسوبية" },
  { href: "/books", label: "كتب مؤلفة ومترجمة" },
  { href: "/meetings", label: "لقاءات ثقافية تلفزيونية" },
  { href: "/study", label: "دراسات ونقد لأعمالي" },
  { href: "/volenteering", label: "إسهام في قضية علمية وقومية" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Links() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <ul className="flex text-sm">
      {navLinks.map(({ href, label }) => (
        <li key={href} className="mx-2">
          <Link
            href={href}
            className={` hover:text-blue-500 transition-colors ${
              pathName === href ? "text-blue-500 font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
