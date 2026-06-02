/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';
import { team, type TeamMember } from '../data/team';

const GROUP_KEYS = ['leadership', 'tech', 'marketingContent', 'community', 'moderation', 'operations', 'interns'] as const;

function gradientFor(id: string): string {
  // Deterministic stable gradient based on id hash
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const palettes = [
    'linear-gradient(135deg, #f59e0b, #b45309)',
    'linear-gradient(135deg, #ec4899, #be185d)',
    'linear-gradient(135deg, #0ea5e9, #1d4ed8)',
    'linear-gradient(135deg, #10b981, #047857)',
    'linear-gradient(135deg, #8b5cf6, #5b21b6)',
    'linear-gradient(135deg, #f43f5e, #9f1239)',
    'linear-gradient(135deg, #14b8a6, #0f766e)',
    'linear-gradient(135deg, #a16207, #422006)',
  ];
  return palettes[h % palettes.length];
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const { lang } = useLanguage();
  const role = lang === 'fr' ? member.roleFr : member.roleEn;
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.4 }}
      className="group relative bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/70 dark:border-stone-800 p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-stone-100 dark:ring-stone-800 group-hover:ring-amber-200 dark:group-hover:ring-amber-900/60 transition-all">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="w-full h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl tracking-wide select-none"
            style={{ background: gradientFor(member.id) }}
          >
            {member.initials}
          </div>
        )}
      </div>
      <h3 className="mt-4 font-serif text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-tight">{member.name}</h3>
      <p className="mt-1 text-xs sm:text-sm text-stone-500 dark:text-stone-400">{role}</p>
    </motion.li>
  );
}

export default function Team() {
  const { t } = useLanguage();
  const tt = t.team;

  const byGroup = team.reduce<Map<number, TeamMember[]>>((acc, m) => {
    const list = acc.get(m.group) ?? [];
    list.push(m);
    acc.set(m.group, list);
    return acc;
  }, new Map());
  for (const list of byGroup.values()) list.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="flex-grow pt-24">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-amber-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">{tt.title}</h1>
            <p className="text-xl text-amber-100">{tt.subtitle}</p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mt-6 text-sm text-amber-100">
              <Sparkles size={14} className="text-amber-300" />
              <span>{team.length} {tt.countLabel}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Members by group */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          {GROUP_KEYS.map((key, gIdx) => {
            const members = byGroup.get(gIdx) ?? [];
            if (members.length === 0) return null;
            return (
              <div key={key}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-5">
                  {tt.groups[key]}
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {members.map((m, i) => (
                    <MemberCard key={m.id} member={m} index={i} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
