import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

let cache: { count: number; ts: number } | null = null;
const TTL = 60 * 60 * 1000; // 1 hour
const FALLBACK = 596;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (cache && Date.now() - cache.ts < TTL) {
    return new Response(JSON.stringify({ count: cache.count }), {
      headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
    });
  }

  try {
    const res = await fetch(
      'https://www.instagram.com/api/v1/users/web_profile_info/?username=tonton__francky',
      {
        headers: {
          'X-IG-App-ID': '936619743392459',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        },
        signal: AbortSignal.timeout(8000),
      }
    );

    const json = await res.json();
    const count = json?.data?.user?.edge_followed_by?.count;

    if (typeof count === 'number') {
      cache = { count, ts: Date.now() };
      return new Response(JSON.stringify({ count }), {
        headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      });
    }
  } catch (e) {
    console.error('Instagram fetch error:', e);
  }

  return new Response(JSON.stringify({ count: cache?.count ?? FALLBACK }), {
    headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' },
  });
});
