import { PortableTextBlock, TypedObject } from '@portabletext/types';

export interface SanityImageType {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface ServiceCardType {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  description: string;
  duration: string;
  features: string[];
  order: number;
  featured: boolean;
  price: string;
}

export interface MainPageType {
  _id: string;
  _type: 'mainPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroSection: HeroSectionType;
  aboutSection: AboutSectionType;
  servicesSection: ServiceSectionType;
  blogSection: BlogSectionType;
  [key: string]: unknown;
}

export interface ServiceSectionType {
  title: string;
  text: string;
  services: ServiceCardType[];
}

export interface BlogSectionType {
  title: string;
  text: string;
  articles: PostType[];
}
export interface AboutSectionType {
  bio: TypedObject | TypedObject[];
  credentials: string[];
  image: SanityImageType;
  name: string;
  statistics: { number: number; label: string }[];

  title: string;
}

export interface HeroSectionType {
  title: TypedObject | TypedObject[];
  text: string;
  btnTitle: string;
}

export interface SiteSettingsType {
  title: string;
  description: string;
  logo: {
    text?: string;
    image?: SanityImageType;
  };
  contactInfo: {
    address: string;
    email: string;
    phone: string;
  };
}

export interface PostType {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  description: string;
  mainImage: SanityImageType;
  content: PortableTextBlock[];
  tags: string[];
  publishedAt: string;
}
