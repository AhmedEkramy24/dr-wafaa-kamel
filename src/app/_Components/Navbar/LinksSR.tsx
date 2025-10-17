"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    href: "/researches",
    label: "البحوث المنشورة دوليا وعربيا ومحليا",
  },
  {
    href: "/shares",
    label: "مشاركة في ندوات علمية",
  },
  {
    href: "/articles",
    label: "بحوث ورسائل علمية منشورة بنيت على أعمالي",
  },
  {
    href: "/writings",
    label: "بعض ما كتب عني",
  },
  { href: "/contact", label: "اتصل بنا" },
];

export default function LinksSR() {
  const pathName = usePathname();
  return (
    <ul className=" text-lg font-semibold lg:flex hidden items-center py-4">
      {links.map(({ href, label }) => (
        <li key={href} className="mx-3">
          <Link
            href={href}
            className={` hover:text-[#235A93] transition-colors ${
              pathName === href ? "text-[#235A93] font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
