import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "authorName": author->name,
  "authorImage": author->image
}`

export const postQuery = groq`*[_type == "post" && (slug.current == $slug || slug.current == $decodedSlug || slug == $slug || slug == $decodedSlug) && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  body,
  publishedAt,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title
}`

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
  "slug": slug.current
}`

export const latestPostsQuery = groq`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "authorName": author->name,
  "authorImage": author->image
}`

export const latestPostsByCategoryQuery = groq`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && $category in categories[]->title] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "authorName": author->name,
  "authorImage": author->image
}`


