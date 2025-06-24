import { client } from '../../sanity/lib/sanity.client';
import { MainPageType, SiteSettingsType } from '../../types/sanityTypes';
import { mainPageQuery, siteSettingQuery } from './queries';
import { FilteredResponseQueryOptions } from 'next-sanity';

export async function getMainPageData(
  draftOptions: FilteredResponseQueryOptions
): Promise<MainPageType> {
  return client.fetch(mainPageQuery, {}, draftOptions);
}

export async function getSiteSettings(
  draftOptions: FilteredResponseQueryOptions
): Promise<SiteSettingsType> {
  return client.fetch(siteSettingQuery, {}, draftOptions);
}
