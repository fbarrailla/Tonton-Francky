/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, GitFork, Users, BookMarked, Loader2, AlertCircle, ExternalLink } from 'lucide-react';

const USERNAME = 'fbarrailla';

interface GithubUser {
  login: string;
  avatar_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

// Tailwind bg color per language
const LANG_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-400',
  SCSS: 'bg-pink-400',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-700',
  Java: 'bg-red-500',
  Ruby: 'bg-red-500',
  PHP: 'bg-indigo-500',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-purple-600',
  Shell: 'bg-stone-500',
  Vue: 'bg-emerald-500',
  Svelte: 'bg-orange-600',
};
const fallbackColor = 'bg-amber-600';

function langColor(lang: string) {
  return LANG_COLORS[lang] ?? fallbackColor;
}

async function fetchStats(): Promise<{ user: GithubUser; repos: GithubRepo[] }> {
  const headers = { Accept: 'application/vnd.github+json' };
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, { headers }),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
  const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]);
  return { user, repos };
}

export default function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    fetchStats()
      .then(({ user, repos }) => { setUser(user); setRepos(repos); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  // Derived stats
  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);

  // Top languages by repo count
  const langCounts: Record<string, number> = {};
  for (const r of repos) {
    if (r.language) langCounts[r.language] = (langCounts[r.language] ?? 0) + 1;
  }
  const sortedLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const maxLangCount = sortedLangs[0]?.[1] ?? 1;

  // Top 3 repos by stars
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  const statCards = user
    ? [
        { icon: <BookMarked size={16} />, value: user.public_repos, label: 'Repos publics' },
        { icon: <Star size={16} />, value: totalStars, label: 'Étoiles totales' },
        { icon: <GitFork size={16} />, value: totalForks, label: 'Forks totaux' },
        { icon: <Users size={16} />, value: user.followers, label: 'Followers' },
      ]
    : [];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-stone-800">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-800">GitHub Stats</h2>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
              >
                @{USERNAME}
              </a>
            </div>
          </div>

          {status === 'loading' && (
            <div className="flex items-center justify-center py-16 text-stone-400 gap-2">
              <Loader2 size={20} className="animate-spin" />
              <span>Chargement des stats…</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 py-8">
              <AlertCircle size={18} />
              <span>Impossible de charger les stats GitHub.</span>
            </div>
          )}

          {status === 'ok' && user && (
            <div className="flex flex-col gap-6">
              {/* Stat cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {statCards.map(({ icon, value, label }) => (
                  <div key={label} className="bg-white dark:bg-stone-900 rounded-2xl p-4 shadow-sm text-center flex flex-col items-center gap-1">
                    <span className="text-stone-400">{icon}</span>
                    <p className="text-2xl font-bold text-stone-800 dark:text-stone-100">{value}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top languages */}
                <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm p-6">
                  <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-4">Langages principaux</p>
                  <ul className="flex flex-col gap-3">
                    {sortedLangs.map(([lang, count]) => (
                      <li key={lang} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${langColor(lang)}`} />
                            <span className="text-sm font-medium text-stone-700 dark:text-stone-200">{lang}</span>
                          </div>
                          <span className="text-xs text-stone-400 dark:text-stone-500">{count} repo{count > 1 ? 's' : ''}</span>
                        </div>
                        <div className="h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${langColor(lang)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(count / maxLangCount) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Top repos */}
                <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm p-6">
                  <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-4">Repos les plus étoilés</p>
                  <ul className="flex flex-col divide-y divide-stone-50">
                    {topRepos.map((repo) => (
                      <li key={repo.name} className="py-3 first:pt-0 last:pb-0">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between gap-3 group"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-stone-800 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors flex items-center gap-1.5 truncate">
                              {repo.name}
                              <ExternalLink size={11} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </p>
                            {repo.description && (
                              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">{repo.description}</p>
                            )}
                            {repo.language && (
                              <div className="flex items-center gap-1.5 mt-1">
                                <span className={`w-2 h-2 rounded-full ${langColor(repo.language)}`} />
                                <span className="text-xs text-stone-400">{repo.language}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1 shrink-0 text-stone-400 dark:text-stone-500 text-xs">
                            <Star size={12} />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://github.com/${USERNAME}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-stone-500 hover:text-stone-800 transition-colors"
                  >
                    Voir tous les repos →
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
