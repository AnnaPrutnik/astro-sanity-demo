import { StructureBuilder } from 'sanity/desk';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Main Page - Singleton
      S.listItem()
        .title('Головна сторінка')
        .id('mainPage')
        .child(S.document().schemaType('mainPage').documentId('mainPage')),
      // Service Cards
      // S.listItem()
      //   .title('Service Cards')
      //   .schemaType('serviceCard')
      //   .child(S.documentTypeList('serviceCard').title('Service Cards')),
      S.listItem()
        .title('Блог')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Список постів')),
      //SiteSetting
      S.listItem()
        .title('Загальні налаштування')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Загальні налаштування')
        ),
    ]);
