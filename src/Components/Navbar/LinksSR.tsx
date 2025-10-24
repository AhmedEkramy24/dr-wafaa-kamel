import { NavLink } from "react-router-dom";

const links = [
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
    label: "أبحاث بنيت على أعمالي",
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

export default function LinksSR() {
  return (
    <ul className=" text-[17px]  font-semibold lg:flex hidden items-center py-4">
      {links.map(({ href, label }) => (
        <li key={href} className="mx-3">
          <NavLink
            to={href}
            className={` hover:text-[#235A93] transition-colors `}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
