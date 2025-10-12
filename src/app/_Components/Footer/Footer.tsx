import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#235A93] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">د. وفاء كامل</h3>
          <p className="text-sm leading-relaxed">
            أستاذة الأدب بجامعة القاهرة، وعضو مجمع اللغة العربية بالقاهرة ودمشق.
            تسعى لنشر الوعي اللغوي والثقافي في الوطن العربي.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline hover:text-gray-200">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/cv" className="hover:underline hover:text-gray-200">
                السيرة الذاتية
              </Link>
            </li>
            <li>
              <Link
                href="/awards"
                className="hover:underline hover:text-gray-200"
              >
                الجوائز
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className="hover:underline hover:text-gray-200"
              >
                الكتب والدراسات
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
          <div className="flex items-center gap-4 text-2xl">
            <Link href="mailto:example@email.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <i className="fa-brand fa-facebook"></i>
            </Link>
            <Link href="https://www.youtube.com" aria-label="YouTube">
              <i className="fa-brand fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-6 text-center py-4 text-sm text-gray-200">
        <p>
          © {new Date().getFullYear()} جميع الحقوق محفوظة للدكتورة وفاء كامل
        </p>
      </div>
    </footer>
  );
}
