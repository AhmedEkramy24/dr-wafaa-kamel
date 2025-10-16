import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  const id = params.id;
  const folderPath = path.join(process.cwd(), "public/books_page", id);

  // لو الفولدر مش موجود
  if (!fs.existsSync(folderPath)) {
    return NextResponse.json({ error: "Folder not found" }, { status: 404 });
  }

  const files = fs.readdirSync(folderPath);

  const cover = files.find((f) => f.endsWith(".jpg") || f.endsWith(".png"));
  const pdf = files.find((f) => f.endsWith(".pdf"));
  const titleFile = files.find((f) => f.endsWith(".txt"));

  let title = null;
  if (titleFile) {
    const titlePath = path.join(folderPath, titleFile);
    title = fs.readFileSync(titlePath, "utf8").trim();
  }

  const data = {
    id,
    cover: cover ? `/books_page/${encodeURIComponent(id)}/${cover}` : null,
    pdf: pdf ? `/books_page/${encodeURIComponent(id)}/${pdf}` : null,
    title,
  };

  return NextResponse.json(data);
}
