import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'

const DEFAULT_TEAM = [
  { name: 'Hala Team', role: 'Editorial Team', bio: 'Official Hala Smart Technologies Team' },
  { name: 'Taimoor Ali Warraich', role: 'Co-Founder', bio: 'Co-Founder at Hala Smart Technologies' },
  { name: 'Saif Ali', role: 'UI/UX & Web Developer', bio: 'Lead Developer & Designer' },
  { name: 'Rimza Habib', role: 'SEO Manager', bio: 'SEO Manager & Content Strategist' },
  { name: 'Hasnain Akbar', role: 'SEO Expert', bio: 'Search Engine Specialist' },
  { name: 'Chaman Shafique', role: 'Content Writer', bio: 'Senior Content Creator' },
  { name: 'Abdur Rafay', role: 'Video Editor', bio: 'Creative Video Production' },
]

export async function GET() {
  try {
    let authors = await writeClient.fetch(`*[_type == "author"] | order(name asc){
      _id,
      name,
      slug,
      role,
      bio
    }`)

    // Auto-seed team members if authors collection is empty or missing Hala Team
    if (!authors || authors.length === 0) {
      console.log('Seeding default team members into Sanity...')
      const createdPromises = DEFAULT_TEAM.map((member) =>
        writeClient.create({
          _type: 'author',
          name: member.name,
          slug: {
            _type: 'slug',
            current: member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          },
          role: member.role,
          bio: member.bio,
        })
      )
      await Promise.all(createdPromises)

      authors = await writeClient.fetch(`*[_type == "author"] | order(name asc){
        _id,
        name,
        slug,
        role,
        bio
      }`)
    }

    return NextResponse.json({ success: true, authors })
  } catch (error: any) {
    console.error('Error fetching authors:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, role, bio } = await req.json()

    if (!name) {
      return NextResponse.json({ success: false, error: 'Author name is required' }, { status: 400 })
    }

    const createdAuthor = await writeClient.create({
      _type: 'author',
      name,
      slug: {
        _type: 'slug',
        current: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      },
      role: role || 'Team Member',
      bio: bio || '',
    })

    return NextResponse.json({ success: true, author: createdAuthor })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
