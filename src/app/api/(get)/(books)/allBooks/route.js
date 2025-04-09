import { prisma } from "../../../../services/prisma.js"
import { NextResponse } from "next/server";

export async function GET() {

    const books = await prisma.books.findMany()

    return NextResponse.json(books)
}