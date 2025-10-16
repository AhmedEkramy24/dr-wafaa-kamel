import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const basePath = path.join(process.cwd(), "public/books_page");

  // تأكد إن الفولدر موجود
  if (!fs.existsSync(basePath)) {
    return NextResponse.json(
      { error: "Base folder not found" },
      { status: 404 }
    );
  }

  const folders = fs.readdirSync(basePath);

  const data = folders.map((folder) => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath);

    const cover = files.find((f) => f.endsWith(".jpg") || f.endsWith(".png"));
    const pdf = files.find((f) => f.endsWith(".pdf"));
    const titleFile = files.find((f) => f.endsWith(".txt"));

    let title = folder; // fallback في حالة مفيش ملف title.txt
    if (titleFile) {
      const titlePath = path.join(folderPath, titleFile);
      title = fs.readFileSync(titlePath, "utf8").trim();
    }

    return {
      id: folder,
      title,
      cover: cover
        ? `/books_page/${encodeURIComponent(folder)}/${cover}`
        : null,
      pdf: pdf ? `/books_page/${encodeURIComponent(folder)}/${pdf}` : null,
    };
  });

  return NextResponse.json(data);
}
