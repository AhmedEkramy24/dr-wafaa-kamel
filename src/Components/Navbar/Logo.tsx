import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="font-bold text-[#235a93] text-3xl text-nowrap">
        {" "}
        الدكتورة / وفاء كامل{" "}
      </h1>
    </Link>
  );
}
