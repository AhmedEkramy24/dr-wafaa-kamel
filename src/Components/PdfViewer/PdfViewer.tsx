interface PdfViewerProps {
  driveUrl: string;
  height?: string;
}

export default function PdfViewer({
  driveUrl,
  height = "80vh",
}: PdfViewerProps) {
  if (!driveUrl) {
    return (
      <div className="text-center text-gray-500 py-10">
        ⚠️ لم يتم تحديد رابط PDF
      </div>
    );
  }

  // نتحقق إذا كان الرابط من Google Drive
  const isDriveLink = driveUrl.includes("drive.google.com");

  // لو من Drive نعدّل "/view" إلى "/preview"
  const src = isDriveLink ? driveUrl.replace("/view", "/preview") : driveUrl; // وإلا نستخدمه كما هو

  return (
    <div className="w-full flex justify-center">
      <iframe
        src={src}
        className="w-full rounded-xl shadow-lg border border-slate-200"
        style={{ height }}
        allow="autoplay"
      />
    </div>
  );
}
