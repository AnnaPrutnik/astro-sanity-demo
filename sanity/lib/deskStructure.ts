import { StructureBuilder } from 'sanity/desk';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Main Page - Singleton
      S.listItem()
        .title('Main Page')
        .id('mainPage')
        .child(S.document().schemaType('mainPage').documentId('mainPage')),
      // Service Cards
      S.listItem()
        .title('Service Cards')
        .schemaType('serviceCard')
        .child(S.documentTypeList('serviceCard').title('Service Cards')),
      //SiteSetting
      S.listItem()
        .title('SiteSettings')
        .id('siteSettings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
