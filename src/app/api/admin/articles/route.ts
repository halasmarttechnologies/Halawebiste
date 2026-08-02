import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'

export async function GET() {
  try {
    const postsQuery = `*[_type == "post"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
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
      },
      "isDraft": _id in path("drafts.**")
    }`

    const posts = await writeClient.fetch(postsQuery)

    return NextResponse.json({ success: true, posts })
  } catch (error: any) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
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

    if (!title || !slug || !focusKeyword) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, and Focus Keyword are required.' },
        { status: 400 }
      )
    }

    const doc: any = {
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      excerpt: excerpt || '',
      focusKeyword,
      seoTitle: seoTitle || title,
      metaDescription: metaDescription || excerpt || '',
      serviceCategory: serviceCategory || 'website-development',
      publishedAt: isPublished ? new Date().toISOString() : undefined,
      readTime: readTime ? Number(readTime) : 5,
    }

    if (contentBody) {
      doc.body = [
        {
          _type: 'block',
          _key: 'block-1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span-1',
              text: contentBody,
            },
          ],
        },
      ]
    }

    if (authorId) {
      doc.author = {
        _type: 'reference',
        _ref: authorId,
      }
    }

    const createdDoc = await writeClient.create(doc)

    return NextResponse.json({ success: true, article: createdDoc })
  } catch (error: any) {
    console.error('Error creating article:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
