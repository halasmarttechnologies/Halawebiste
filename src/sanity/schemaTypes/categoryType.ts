import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceGroup',
      title: 'Related Website Service',
      type: 'string',
      options: {
        list: [
          { title: 'Website Development', value: 'website-development' },
          { title: 'AI Agent Solutions', value: 'ai-agent' },
          { title: 'Digital Marketing', value: 'digital-marketing' },
          { title: 'Search Engine Optimization (SEO)', value: 'seo' },
          { title: 'Pay-Per-Click Advertising (PPC)', value: 'ppc' },
          { title: 'Social Media Marketing (SMM)', value: 'smm' },
          { title: 'Branding & Graphic Design', value: 'branding' },
          { title: 'WhatsApp Automation', value: 'whatsapp-automation' },
          { title: 'General & News', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'serviceGroup',
    },
  },
})
