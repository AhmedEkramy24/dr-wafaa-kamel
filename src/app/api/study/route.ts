import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public/study/1");
  const files = fs.readdirSync(imagesDir);

  const images = files.map((file) => ({
    title: file.split(".")[0], // اسم الصورة بدون الامتداد
    src: `/study/1/${file}`, // المسار داخل public
  }));

  return NextResponse.json(images);
}
