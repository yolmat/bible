import { prisma } from '../../../../../services/prisma.js'
import { NextResponse, NextRequest } from 'next/server';

export async function GET(NextRequest) {

    const searchParams = NextRequest.nextUrl.searchParams
    const book = searchParams.get('book')

    const books = await prisma.verses.findMany({
        where: {
            book: parseInt(book),
        },
        select: {
            book: true,
            chapter: true,
        },
        orderBy: {
            chapter: 'asc'
        },
    })

    return NextResponse.json(books, { status: 200 })
}