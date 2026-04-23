import React, { useState, useEffect } from 'react';
import { Lock, TrendingUp, BookOpen, Users, Eye } from 'lucide-react';
import { supabase } from '../supabase';

const PASSWORD = import.meta.env.VITE_DASHBOARD_PASSWORD || 'password';
const SUPABASE_URL = 'https://dufftgmvjjtlyfqwdsyp.supabase.co/functions/v1';

function useAuth() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('dash_auth') === '1');
  const login = (pw: string) => {
    if (pw === PASSWORD) {
      sessionStorage.setItem('dash_auth', '1');
      setAuthed(true);
      return true;
    }
    return false;
  };
  return { authed, login };
}

function LoginGate({ onLogin }: { onLogin: (pw: string) => boolean }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onLogin(pw)) {
      setError(true);
      setPw('');
    }
  };

  return (
    <main className="flex-grow min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800">
            <Lock size={28} className="text-gray-600 dark:text-gray-300" />
          </div>
        </div>
        <h1 className="text-2xl font-serif font-bold text-center mb-2 dark:text-white">Dashboard</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8">Accès restreint</p>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setError(false); }}
            placeholder="Mot de passe"
            autoFocus
            className={`w-full px-4 py-3 rounded-xl border text-base bg-white dark:bg-gray-800 dark:text-white outline-none transition-colors ${error ? 'border-red-400' : 'border-gray-200 dark:border-gray-600 focus:border-gray-400'}`}
          />
          {error && <p className="text-red-500 text-sm text-center -mt-2">Mot de passe incorrect</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-base hover:opacity-90 transition-opacity"
          >
            Entrer
          </button>
        </form>
      </div>
    </main>
  );
}

interface PageView { slug: string; views: number }
interface TopArticle { slug: string; title: string; views: number }

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gray-500 dark:text-gray-400">{icon}</div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-4xl font-bold font-serif dark:text-white">{value}</p>
      {sub && <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

function DashboardContent() {
  const [articles, setArticles] = useState<TopArticle[]>([]);
  const [sales, setSales] = useState<number | null>(null);
  const [followers, setFollowers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [pageViewsRes, salesRes, followersRes] = await Promise.allSettled([
          supabase.from('page_views').select('slug, views').order('views', { ascending: false }).limit(10),
          fetch(`${SUPABASE_URL}/ebook-sales`).then(r => r.json()),
          fetch(`${SUPABASE_URL}/instagram-followers`).then(r => r.json()),
        ]);

        if (pageViewsRes.status === 'fulfilled' && pageViewsRes.value.data) {
          setArticles(
            (pageViewsRes.value.data as PageView[]).map(row => ({
              slug: row.slug,
              title: slugToTitle(row.slug),
              views: row.views,
            }))
          );
        }
        if (salesRes.status === 'fulfilled') setSales(salesRes.value.count ?? null);
        if (followersRes.status === 'fulfilled') setFollowers(followersRes.value.count ?? null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="flex-grow px-4 py-12 max-w-4xl mx-auto w-full">
      <h1 className="text-3xl font-serif font-bold mb-2 dark:text-white">Dashboard</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">Statistiques en temps réel</p>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <StatCard
          icon={<BookOpen size={20} />}
          label="Ventes ebook"
          value={sales ?? '—'}
          sub="commandes totales"
        />
        <StatCard
          icon={<Users size={20} />}
          label="Followers Instagram"
          value={followers ?? '—'}
          sub="@tonton__francky"
        />
      </div>

      {/* Top articles */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
          <TrendingUp size={18} className="text-gray-500 dark:text-gray-400" />
          <h2 className="font-semibold dark:text-white">Articles les plus lus</h2>
        </div>
        {articles.length === 0 ? (
          <div className="px-6 py-10 text-center text-gray-400 dark:text-gray-500 text-sm">
            Aucune donnée disponible
          </div>
        ) : (
          <ul className="divide-y divide-gray-50 dark:divide-gray-700">
            {articles.map((a, i) => (
              <li key={a.slug} className="flex items-center gap-4 px-6 py-4">
                <span className="text-sm font-mono text-gray-300 dark:text-gray-600 w-5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <a
                    href={`/blog/${a.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium dark:text-white hover:underline truncate block"
                  >
                    {a.title}
                  </a>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">/blog/{a.slug}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 shrink-0">
                  <Eye size={13} />
                  <span className="text-sm font-medium">{a.views.toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default function Dashboard() {
  const { authed, login } = useAuth();
  if (!authed) return <LoginGate onLogin={login} />;
  return <DashboardContent />;
}
