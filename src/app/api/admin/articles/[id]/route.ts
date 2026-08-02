import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const post = await writeClient.fetch(
      `*[_type == "post" && _id == $id][0]{
        _id,
        title,
        slug,
        excerpt,
        body,
        focusKeyword,
        seoTitle,
        metaDescription,
        serviceCategory,
        readTime,
        publishedAt,
        author-> {
          _id,
          name,
          role
        }
      }`,
      { id }
    )

    if (!post) {
      return NextResponse.json({ success: false, error: 'Article not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, post })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()
    const {
      title,
      slug,
      excerpt,
      contentBody,
      focusKeyword,
      seoTitle,
      metaDescription,
      serviceCategory,
      authorId,
      readTime,
      isPublished,
    } = body

    const patch = writeClient.patch(id).set({
      title,
      slug: { _type: 'slug', current: slug },
      excerpt,
      focusKeyword,
      seoTitle: seoTitle || title,
      metaDescription,
      serviceCategory,
      readTime: readTime ? Number(readTime) : 5,
    })

    if (isPublished) {
      patch.set({ publishedAt: new Date().toISOString() })
    }

    if (authorId) {
      patch.set({
        author: {
          _type: 'reference',
          _ref: authorId,
        },
      })
    }

    if (contentBody) {
      patch.set({
        body: [
          {
            _type: 'block',
            _key: 'block-1',
            style: 'normal',
            children: [{ _type: 'span', _key: 'span-1', text: contentBody }],
          },
        ],
      })
    }

    const updated = await patch.commit()
    return NextResponse.json({ success: true, article: updated })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await writeClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
