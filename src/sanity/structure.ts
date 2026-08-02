import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Hala Dashboard')
    .items([
      // Articles Section
      S.listItem()
        .title('Articles & Insights')
        .child(
          S.list()
            .title('Articles')
            .items([
              S.listItem()
                .title('All Posts')
                .child(
                  S.documentList()
                    .title('All Posts')
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Published Posts')
                .child(
                  S.documentList()
                    .title('Published Posts')
                    .filter('_type == "post" && !(_id in path("drafts.**"))')
                ),
              S.listItem()
                .title('Draft Posts')
                .child(
                  S.documentList()
                    .title('Draft Posts')
                    .filter('_type == "post" && (_id in path("drafts.**"))')
                ),
            ])
        ),

      S.divider(),

      // Authors
      S.listItem()
        .title('Authors & Team')
        .child(
          S.documentList()
            .title('Authors')
            .filter('_type == "author"')
        ),

      // Categories
      S.listItem()
        .title('Categories & Topics')
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
