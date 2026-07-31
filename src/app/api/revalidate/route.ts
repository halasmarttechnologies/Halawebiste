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

    // If the `SANITY_REVALIDATE_SECRET` is not set, anyone can revalidate the cache
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      console.warn('SANITY_REVALIDATE_SECRET not set. Revalidation endpoint is unauthenticated.')
    }

    // Revalidate the main blog listing
    revalidatePath('/blogs')

    // If there is a slug, revalidate the specific post
    if (body.slug) {
      revalidatePath(`/blogs/${body.slug}`)
    }

    return NextResponse.json({ body })
  } catch (err: any) {
    console.error(err)
    return new Response(err.message, { status: 500 })
  }
}
