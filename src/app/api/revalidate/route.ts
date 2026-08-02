import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string; slug?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response({ message, body } as any, { status: 400 })
    }

    // Revalidate main website layout & home page
    revalidatePath('/', 'layout')

    // Revalidate specific blog page if slug provided
    if (body.slug) {
      revalidatePath(`/blogs/${body.slug}`)
    }

    return NextResponse.json({ success: true, body })
  } catch (err: any) {
    console.error('Revalidation error:', err)
    return new Response(err.message, { status: 500 })
  }
}
