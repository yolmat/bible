import { prisma } from "../../../../services/prisma.js"
import { NextResponse } from "next/server";

export async function GET() {

    const books = await prisma.books.findMany({
        where: {
            testament: "2"
        }
    })

    return NextResponse.json(books)
}