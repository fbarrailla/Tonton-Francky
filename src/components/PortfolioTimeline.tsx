/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../i18n';
import { projects as allProjects, type Project } from '../data/portfolio';

// Group projects by year, sorted chronologically
function groupByYear(items: Project[]): { year: string; projects: Project[] }[] {
  const map = new Map<string, Project[]>();
  for (const p of items) {
    if (!map.has(p.year)) map.set(p.year, []);
    map.get(p.year)!.push(p);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([year, projects]) => ({ year, projects }));
}

const YEAR_COLORS: Record<string, string> = {
  '2005': 'bg-stone-400 dark:bg-stone-600',
  '2015': 'bg-stone-400 dark:bg-stone-600',
  '2016': 'bg-stone-500 dark:bg-stone-500',
  '2023': 'bg-amber-500',
  '2024': 'bg-amber-600',
  '2025': 'bg-amber-700',
  '2026': 'bg-travel-gold',
};

export default function PortfolioTimeline({ projects }: { projects?: Project[] }) {
  const { lang, t } = useLanguage();
  const p = t.portfolio;
  const groups = groupByYear(projects ?? allProjects);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-200 via-amber-300 to-amber-600 dark:from-stone-700 dark:via-amber-700 dark:to-amber-500" />

        <div className="flex flex-col gap-14">
          {groups.map(({ year, projects: yearProjects }, groupIndex) => {
            const prevYear = groupIndex > 0 ? Number(groups[groupIndex - 1].year) : null;
            const gap = prevYear ? Number(year) - prevYear : 0;
            const showGap = gap > 2;

            return (
              <React.Fragment key={year}>
                {/* Gap indicator */}
                {showGap && (
                  <div className="flex items-center gap-4 pl-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center">
                      <div className="flex flex-col gap-1 items-center">
                        <div className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                        <div className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                        <div className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                      </div>
                    </div>
                    <p className="text-sm text-stone-400 dark:text-stone-600 italic">
                      {gap - 1} an{gap - 1 > 1 ? 's' : ''} sans projet public
                    </p>
                  </div>
                )}

                {/* Year group */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="flex gap-5 md:gap-7"
                >
                  {/* Year node */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${YEAR_COLORS[year] ?? 'bg-amber-600'} flex items-center justify-center shadow-md z-10`}>
                      <span className="text-white font-bold text-xs md:text-sm leading-none text-center">
                        {year}
                      </span>
                    </div>
                  </div>

                  {/* Projects for this year */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {yearProjects.map((project, i) => (
                      <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                      >
                        <Link
                          to={`/portfolio/${project.slug}`}
                          onClick={() => sessionStorage.setItem('portfolio-scroll', String(window.scrollY))}
                          className="group block bg-white dark:bg-stone-900 rounded-2xl p-4 shadow-sm hover:shadow-md border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-700 transition-all duration-200"
                        >
                          {/* Thumbnail */}
                          <div className="aspect-video rounded-lg overflow-hidden bg-stone-950 mb-3">
                            {project.mediaType !== 'video' ? (
                              <img src={project.media} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            ) : (
                              <video src={project.media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                            )}
                          </div>

                          <h3 className="font-semibold text-stone-800 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors text-sm leading-snug mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2 mb-2">
                            {lang === 'fr' ? project.descFr : project.descEn}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {project.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="text-[10px] font-semibold bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 px-2 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 2 && (
                                <span className="text-[10px] text-stone-400 dark:text-stone-500 px-1">+{project.tags.length - 2}</span>
                              )}
                            </div>
                            <div className="flex gap-2 shrink-0">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                                >
                                  <Github size={13} />
                                </a>
                              )}
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                                >
                                  <ExternalLink size={13} />
                                </a>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
