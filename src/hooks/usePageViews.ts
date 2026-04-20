import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export function usePageViews(slug: string): number | null {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .rpc('increment_page_view', { page_slug: slug })
      .then(({ data, error }) => {
        if (!error && data != null) setViews(data as number);
      });
  }, [slug]);

  return views;
}
