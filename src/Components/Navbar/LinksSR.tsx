import { NavLink } from "react-router-dom";

const links = [
  { href: "/volenteering", label: "إسهام في قضية علمية وقومية" },
  {
    href: "/researches",
    label: "بحوثها",
  },
  {
    href: "/shares",
    label: "مشاركة في ندوات علمية",
  },
  {
    href: "/articles",
    label: "أبحاث بنيت على أعمالها",
  },
  {
    href: "/writings",
    label: "بعض ما كتب عنها",
  },
  { href: "/activities", label: "أنشطة خدمة المجتمع" },
  { href: "/media", label: "مقالات علمية بوسائل الإعلام" },
  { href: "/goodwards", label: "شهادات في حقها" },

  { href: "/contact", label: "اتصل بنا" },
];

export default function LinksSR() {
  return (
    <ul className=" text-[17px]  font-semibold xl:flex hidden items-center py-4">
      {links.map(({ href, label }) => (
        <li key={href} className="mx-1">
          <NavLink
            to={href}
            className={` hover:text-[#235A93] hover:border-[#235A93] text-nowrap px-2 py-1 rounded-md border-slate-300 border`}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
