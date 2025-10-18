"use client";

import React from "react";

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

  const previewUrl = driveUrl.replace("/view", "/preview");

  return (
    <div className="w-full flex justify-center">
      <iframe
        src={previewUrl}
        className="w-full rounded-xl shadow-lg"
        style={{ height }}
        allow="autoplay"
      />
    </div>
  );
}
