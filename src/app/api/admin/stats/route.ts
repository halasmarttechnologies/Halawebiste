import { NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'

export async function GET() {
  try {
    const totalPostsQuery = `count(*[_type == "post"])`
    const publishedPostsQuery = `count(*[_type == "post" && !(_id in path("drafts.**"))])`
    const draftPostsQuery = `count(*[_type == "post" && (_id in path("drafts.**"))])`
    const authorsQuery = `count(*[_type == "author"])`
    const categoriesQuery = `count(*[_type == "category"])`

    const [totalPosts, publishedPosts, draftPosts, totalAuthors, totalCategories] = await Promise.all([
      writeClient.fetch(totalPostsQuery),
      writeClient.fetch(publishedPostsQuery),
      writeClient.fetch(draftPostsQuery),
      writeClient.fetch(authorsQuery),
      writeClient.fetch(categoriesQuery),
    ])

    return NextResponse.json({
      success: true,
      stats: {
        totalPosts,
        publishedPosts,
        draftPosts,
        totalAuthors,
        totalCategories,
      },
    })
  } catch (error: any) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
