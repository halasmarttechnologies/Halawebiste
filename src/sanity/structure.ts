import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Hala CMS Dashboard')
    .items([
      // 1. Articles Section
      S.listItem()
        .title('Articles & Blog Posts')
        .child(
          S.list()
            .title('Content Manager')
            .items([
              S.listItem()
                .title('All Articles')
                .child(
                  S.documentList()
                    .title('All Articles')
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Published Articles')
                .child(
                  S.documentList()
                    .title('Published Articles')
                    .filter('_type == "post" && !(_id in path("drafts.**"))')
                ),
              S.listItem()
                .title('Draft Articles')
                .child(
                  S.documentList()
                    .title('Draft Articles')
                    .filter('_type == "post" && (_id in path("drafts.**"))')
                ),
              S.divider(),
              S.listItem()
                .title('Filter by Website Service')
                .child(
                  S.list()
                    .title('Services')
                    .items([
                      S.listItem()
                        .title('Website Development')
                        .child(S.documentList().title('Website Development Posts').filter('_type == "post" && serviceCategory == "website-development"')),
                      S.listItem()
                        .title('AI Agent Solutions')
                        .child(S.documentList().title('AI Agent Posts').filter('_type == "post" && serviceCategory == "ai-agent"')),
                      S.listItem()
                        .title('SEO (Search Engine Optimization)')
                        .child(S.documentList().title('SEO Posts').filter('_type == "post" && serviceCategory == "seo"')),
                      S.listItem()
                        .title('PPC Advertising')
                        .child(S.documentList().title('PPC Posts').filter('_type == "post" && serviceCategory == "ppc"')),
                      S.listItem()
                        .title('Social Media Marketing (SMM)')
                        .child(S.documentList().title('SMM Posts').filter('_type == "post" && serviceCategory == "smm"')),
                      S.listItem()
                        .title('Branding & Graphic Design')
                        .child(S.documentList().title('Branding Posts').filter('_type == "post" && serviceCategory == "branding"')),
                      S.listItem()
                        .title('WhatsApp Automation')
                        .child(S.documentList().title('WhatsApp Automation Posts').filter('_type == "post" && serviceCategory == "whatsapp-automation"')),
                      S.listItem()
                        .title('Digital Marketing General')
                        .child(S.documentList().title('Digital Marketing Posts').filter('_type == "post" && serviceCategory == "digital-marketing"')),
                    ])
                )
            ])
        ),

      S.divider(),

      // 2. Authors & Teammates
      S.listItem()
        .title('Authors & Teammates')
        .child(
          S.documentList()
            .title('All Authors')
            .filter('_type == "author"')
        ),

      // 3. Service Categories
      S.listItem()
        .title('Service Categories')
        .child(
          S.documentList()
            .title('Categories')
            .filter('_type == "category"')
        ),

      S.divider(),

      // System Document Types
      ...S.documentTypeListItems().filter(
        (listItem) => !['post', 'author', 'category'].includes(listItem.getId() || '')
      ),
    ])
