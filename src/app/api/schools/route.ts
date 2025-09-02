import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(schools);
  } catch (error) {
    console.error("Error fetching schools:", error);
    return NextResponse.json({ error: "Failed to fetch schools" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const contact = formData.get("contact") as string;
    const email_id = formData.get("email_id") as string;
    const imageFile = formData.get("image") as File | null;

    if (!name || !address || !city || !state || !contact || !email_id || !imageFile) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save image in public/schoolImages
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = `${Date.now()}-${imageFile.name}`;
    const filePath = path.join(process.cwd(), "public/schoolImages", fileName);
    await writeFile(filePath, buffer);

    // Insert into DB
    const school = await prisma.school.create({
      data: {
        name,
        address,
        city,
        state,
        contact,
        email_id,
        image: `/schoolImages/${fileName}`, // store relative path
      },
    });

    return NextResponse.json(school, { status: 201 });
  } catch (error) {
    console.error("Error creating school:", error);
    
    return NextResponse.json({ error: "Failed to add school" }, { status: 500 });
  }
}
