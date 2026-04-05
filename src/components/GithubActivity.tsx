/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { GitCommitHorizontal, GitPullRequest, Star, GitFork, AlertCircle, Plus, Loader2 } from 'lucide-react';

interface GithubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    commits?: { message: string }[];
    action?: string;
    pull_request?: { title: string };
    issue?: { title: string };
    ref?: string;
    ref_type?: string;
  };
}

const MARCH_START = new Date('2026-03-01T00:00:00Z');
const MARCH_END = new Date('2026-03-31T23:59:59Z');

// March 1 2026 = Sunday → in Mon-first grid, offset = 6
const MARCH_OFFSET = 6;
const MARCH_DAYS = 31;

function getEventLabel(event: GithubEvent): string {
  switch (event.type) {
    case 'PushEvent':
      const count = event.payload.commits?.length ?? 0;
      return `${count} commit${count > 1 ? 's' : ''} → ${event.repo.name.split('/')[1]}`;
    case 'PullRequestEvent':
      return `PR ${event.payload.action} → ${event.repo.name.split('/')[1]}`;
    case 'IssuesEvent':
      return `Issue ${event.payload.action} → ${event.repo.name.split('/')[1]}`;
    case 'WatchEvent':
      return `Starred ${event.repo.name.split('/')[1]}`;
    case 'ForkEvent':
      return `Forked ${event.repo.name.split('/')[1]}`;
    case 'CreateEvent':
      return `Created ${event.payload.ref_type} ${event.payload.ref ? `"${event.payload.ref}"` : ''} → ${event.repo.name.split('/')[1]}`;
    default:
      return `${event.type.replace('Event', '')} → ${event.repo.name.split('/')[1]}`;
  }
}

function EventIcon({ type }: { type: string }) {
  const cls = 'shrink-0';
  switch (type) {
    case 'PushEvent': return <GitCommitHorizontal size={14} className={cls} />;
    case 'PullRequestEvent': return <GitPullRequest size={14} className={cls} />;
    case 'WatchEvent': return <Star size={14} className={cls} />;
    case 'ForkEvent': return <GitFork size={14} className={cls} />;
    case 'CreateEvent': return <Plus size={14} className={cls} />;
    default: return <AlertCircle size={14} className={cls} />;
  }
}

function heatColor(count: number): string {
  if (count === 0) return 'bg-stone-100 dark:bg-stone-800';
  if (count === 1) return 'bg-emerald-200';
  if (count <= 3) return 'bg-emerald-400';
  if (count <= 6) return 'bg-emerald-600';
  return 'bg-emerald-800';
}

async function fetchMarchEvents(): Promise<GithubEvent[]> {
  const allEvents: GithubEvent[] = [];
  for (let page = 1; page <= 3; page++) {
    const res = await fetch(
      `https://api.github.com/users/fbarrailla/events?per_page=100&page=${page}`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );
    if (!res.ok) break;
    const data: GithubEvent[] = await res.json();
    if (!data.length) break;
    for (const ev of data) {
      const d = new Date(ev.created_at);
      if (d >= MARCH_START && d <= MARCH_END) allEvents.push(ev);
      // Events are newest-first; if we're past March, keep going (older pages)
    }
    // If the last event on this page is older than March, stop
    if (data.length > 0 && new Date(data[data.length - 1].created_at) < MARCH_START) break;
  }
  return allEvents;
}

export default function GithubActivity() {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    fetchMarchEvents()
      .then((evs) => { setEvents(evs); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  // Build day → event count map (day 1–31)
  const dayCounts: Record<number, number> = {};
  for (let d = 1; d <= MARCH_DAYS; d++) dayCounts[d] = 0;
  for (const ev of events) {
    const d = new Date(ev.created_at).getUTCDate();
    dayCounts[d] = (dayCounts[d] ?? 0) + 1;
  }

  const totalEvents = events.length;
  const totalCommits = events.filter(e => e.type === 'PushEvent')
    .reduce((sum, e) => sum + (e.payload.commits?.length ?? 0), 0);
  const reposSet = new Set(events.map(e => e.repo.name));
  const mostActive = Object.entries(dayCounts).reduce((a, b) => b[1] > a[1] ? b : a, ['0', 0]);

  // Build calendar cells: MARCH_OFFSET blanks + 31 days
  const totalCells = MARCH_OFFSET + MARCH_DAYS;
  const rows = Math.ceil(totalCells / 7);

  // Recent events (latest 8)
  const recent = [...events].slice(0, 8);

  const WEEK_DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return (
    <section className="pt-20 pb-16 px-6 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-stone-800">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100">Activité GitHub — Mars 2026</h2>
              <a
                href="https://github.com/fbarrailla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
              >
                @fbarrailla
              </a>
            </div>
          </div>

          {status === 'loading' && (
            <div className="flex items-center justify-center py-16 text-stone-400 gap-2">
              <Loader2 size={20} className="animate-spin" />
              <span>Chargement de l'activité…</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 py-8">
              <AlertCircle size={18} />
              <span>Impossible de charger l'activité GitHub.</span>
            </div>
          )}

          {status === 'ok' && (
            <div className="flex flex-col gap-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Événements', value: totalEvents },
                  { label: 'Commits', value: totalCommits },
                  { label: 'Repos', value: reposSet.size },
                  { label: 'Jour le + actif', value: mostActive[1] > 0 ? `${mostActive[1]} ev. le ${mostActive[0]}` : '—' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white dark:bg-stone-900 rounded-2xl p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-stone-800 dark:text-stone-100">{value}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Heatmap calendar */}
              <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm p-6">
                <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-4">Contributions</p>
                {/* Day labels */}
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {WEEK_DAYS.map(d => (
                    <div key={d} className="text-center text-[10px] text-stone-400 dark:text-stone-600 font-medium">{d}</div>
                  ))}
                </div>
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: rows * 7 }).map((_, i) => {
                    const dayNum = i - MARCH_OFFSET + 1;
                    if (i < MARCH_OFFSET || dayNum > MARCH_DAYS) {
                      return <div key={i} className="aspect-square rounded-sm bg-transparent" />;
                    }
                    const count = dayCounts[dayNum] ?? 0;
                    return (
                      <div
                        key={i}
                        title={`${dayNum} mars — ${count} événement${count !== 1 ? 's' : ''}`}
                        className={`aspect-square rounded-sm ${heatColor(count)} transition-colors cursor-default`}
                      />
                    );
                  })}
                </div>
                {/* Legend */}
                <div className="flex items-center gap-1.5 mt-3 justify-end">
                  <span className="text-[10px] text-stone-400">Moins</span>
                  {['bg-stone-100', 'bg-emerald-200', 'bg-emerald-400', 'bg-emerald-600', 'bg-emerald-800'].map(c => (
                    <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                  ))}
                  <span className="text-[10px] text-stone-400">Plus</span>
                </div>
              </div>

              {/* Recent activity */}
              {recent.length > 0 && (
                <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm p-6">
                  <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-4">Dernière activité</p>
                  <ul className="flex flex-col divide-y divide-stone-50 dark:divide-stone-800">
                    {recent.map((ev) => {
                      const date = new Date(ev.created_at);
                      const day = date.getUTCDate();
                      const month = date.toLocaleString('fr-FR', { month: 'short', timeZone: 'UTC' });
                      return (
                        <li key={ev.id} className="flex items-center gap-3 py-2.5 text-sm">
                          <span className="text-stone-400 dark:text-stone-500 w-14 shrink-0 text-xs">{day} {month}</span>
                          <span className="text-stone-500 dark:text-stone-400"><EventIcon type={ev.type} /></span>
                          <span className="text-stone-700 dark:text-stone-200 truncate">{getEventLabel(ev)}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="https://github.com/fbarrailla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-stone-500 hover:text-stone-800 transition-colors"
                  >
                    Voir le profil complet →
                  </a>
                </div>
              )}

              {totalEvents === 0 && (
                <p className="text-stone-400 text-sm text-center py-4">Aucune activité publique trouvée pour mars 2026.</p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
