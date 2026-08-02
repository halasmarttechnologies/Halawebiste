import { defineField, defineType } from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author / Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'e.g. Hala Team, Saif Ali, Taimoor Ali Warraich, Rimza Habib, etc.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      description: 'e.g. Co-Founder, UI/UX & Web Developer, SEO Manager, SEO Expert, Content Writer, Video Editor',
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo / Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio / Short Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed Author',
        subtitle: subtitle || 'Team Member',
        media,
      }
    },
  },
})
