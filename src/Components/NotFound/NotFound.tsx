import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9fafb] text-center p-6">
      <h1 className="text-9xl font-bold text-[#5227FF]">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        الصفحة غير موجودة
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>

      <Link
        to="/"
        className="mt-6 bg-[#5227FF] text-white px-6 py-3 rounded-full hover:bg-[#3f1fca] transition"
      >
        الرجوع للرئيسية
      </Link>
    </div>
  );
}
