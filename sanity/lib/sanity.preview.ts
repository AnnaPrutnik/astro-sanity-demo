import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from './sanity.client';
import { useEffect, useState } from 'react';

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts',
});

export function getPreviewClient(token: string | null) {
  if (!token) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
    perspective: 'previewDrafts',
  });
}

type PreviewData = {
  _type: string;
  [key: string]: unknown;
};

export function usePreviewSubscription<T extends PreviewData>(
  query: string,
  token: string | null,
  initialData?: T,
  params: Record<string, unknown> = {}
) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    const client = getPreviewClient(token);
    if (!client) {
      return;
    }

    const subscription = client.listen<T>(query, params).subscribe((update) => {
      setData(update.result);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [query, params, token]);

  return {
    data: data || initialData,
    isLoading,
  };
}
