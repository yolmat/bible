import { prisma } from '../../../../../services/prisma.js'
import { NextResponse, NextRequest } from 'next/server';

export async function GET(NextRequest) {

    const searchParams = NextRequest.nextUrl.searchParams
    const book = searchParams.get('book')
    const chapter = searchParams.get('chapter')

    if (parseInt(book) < 0 || parseInt(book) > 65) {
        return NextResponse.json({ error: 'the book not found' }, { status: 400 })
    }

    if (parseInt(chapter) <= 0) {
        return NextResponse.json({ error: 'the chapter not found' }, { status: 400 })
    }

    const books = await prisma.verses.findMany({
        where: {
            book: parseInt(book),
            chapter: parseInt(chapter)
        },
        orderBy: {
            verse: 'asc'
        },
    })

    return NextResponse.json(books, { status: 200 })
}