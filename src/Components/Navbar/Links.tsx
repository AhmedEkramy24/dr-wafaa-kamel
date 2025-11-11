import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { href: "/", label: "الصفحة الرئيسية" },
  { href: "/cv", label: "السيرة الذاتية" },
  { href: "/awards", label: "الجوائز" },
  { href: "/certificates", label: "    التكريم وشهادات تقدير " },
  { href: "/programes", label: "برامج لغوية حاسوبية" },
  { href: "/books", label: "كتب مؤلفة ومترجمة" },
  { href: "/meetings", label: "لقاءات ثقافية تلفزيونية" },
  { href: "/study", label: "دراسات ونقد لأعمالي" },
  { href: "/volenteering", label: "إسهام في قضية علمية وقومية" },
  {
    href: "/researches",
    label: "أبحاثي",
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
  { href: "/activities", label: "أنشطة خيرية" },
  { href: "/media", label: "مقالات علمية بوسائل الإعلام" },
  { href: "/goodwards", label: "شهادات في حقي" },

  { href: "/contact", label: "اتصل بنا" },
];

export default function Links() {
  const [openMenue, setopenMenue] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setopenMenue(false);
      }
    };

    if (openMenue) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenue]);

  return (
    <>
      {/* links large screens */}
      <ul className=" text-[17px]  font-semibold lg:flex hidden items-center">
        {navLinks.map(
          ({ href, label }, index) =>
            index < 8 && (
              <li key={href} className="mx-3">
                <NavLink
                  to={href}
                  className={` hover:text-[#235A93] transition-colors `}
                >
                  {label}
                </NavLink>
              </li>
            )
        )}
      </ul>
      {/* links small screens */}

      <ul
        className={` text-sm lg:hidden flex flex-col duration-500 fixed top-0  bottom-0 bg-white pt-8 z-50 text-start border-r border-gray-200 ${
          openMenue ? "left-0" : "-left-full"
        }`}
        ref={menuRef}
      >
        <button
          className="absolute top-3 left-4 cursor-pointer text-red-500 text-2xl"
          onClick={() => setopenMenue(false)}
        >
          <i className="fas fa-xmark"></i>
        </button>
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            className="p-2 border-b border-gray-200 "
            onClick={() => setopenMenue(false)}
          >
            <NavLink
              to={href}
              className={` hover:text-[#235A93] transition-colors`}
              onClick={() => setopenMenue(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* bars icon to close and open menu in small screens */}
      <button className="lg:hidden" onClick={() => setopenMenue(!openMenue)}>
        <i className="fas fa-bars"></i>
      </button>
    </>
  );
}
