/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Fuse from 'fuse.js';
import { MapPin, UtensilsCrossed, Code2, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import { destinations } from '../data/voyages';
import { recipes } from '../data/cuisine';
import { projects } from '../data/portfolio';

interface SearchItem {
  type: 'voyage' | 'cuisine' | 'portfolio';
  title: string;
  subtitle: string;
  thumbnail?: string;
  url: string;
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const { lang, t } = useLanguage();
  const s = t.search;
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  // Build the search index, language-aware
  const items = useMemo<SearchItem[]>(() => {
    const voyageItems: SearchItem[] = destinations
      .filter((d) => d.slug)
      .map((d) => ({
        type: 'voyage',
        title: d.name,
        subtitle: `${d.country} — ${lang === 'fr' ? d.description : d.descriptionEn}`,
        thumbnail: d.thumbnail,
        url: `/voyages/${d.slug}`,
      }));

    const cuisineItems: SearchItem[] = recipes.map((r) => ({
      type: 'cuisine',
      title: lang === 'fr' ? r.title : r.titleEn,
      subtitle: lang === 'fr' ? r.subtitle : r.subtitleEn,
      thumbnail: r.thumbnail,
      url: `/cuisine/${r.slug}`,
    }));

    const portfolioItems: SearchItem[] = projects.map((p) => ({
      type: 'portfolio',
      title: p.title,
      subtitle: lang === 'fr' ? p.descFr : p.descEn,
      url: `/portfolio/${p.slug}`,
    }));

    return [...voyageItems, ...cuisineItems, ...portfolioItems];
  }, [lang]);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: ['title', 'subtitle'],
        threshold: 0.4,
        minMatchCharLength: 2,
        includeScore: true,
      }),
    [items],
  );

  const results = useMemo<SearchItem[]>(() => {
    if (query.trim().length < 2) return [];
    return fuse.search(query.trim()).map((r) => r.item);
  }, [query, fuse]);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keep activeIndex in bounds
  useEffect(() => {
    setActiveIndex(0);
  }, [results.length]);

  // Scroll active item into view
  useEffect(() => {
    const item = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const select = (item: SearchItem) => {
    navigate(item.url);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      select(results[activeIndex]);
    }
  };

  const typeIcon = (type: SearchItem['type']) => {
    if (type === 'voyage') return <MapPin size={14} className="shrink-0 text-amber-700" />;
    if (type === 'cuisine') return <UtensilsCrossed size={14} className="shrink-0 text-amber-700" />;
    return <Code2 size={14} className="shrink-0 text-amber-700" />;
  };

  const typeLabel = (type: SearchItem['type']) => {
    if (type === 'voyage') return s.voyages;
    if (type === 'cuisine') return s.cuisine;
    return s.portfolio;
  };

  // Group results by type for section headers
  const grouped = useMemo(() => {
    const seen = new Set<string>();
    return results.map((item, index) => ({
      item,
      index,
      showHeader: !seen.has(item.type) && !!seen.add(item.type),
    }));
  }, [results]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="search-modal"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed left-1/2 top-[80px] z-[70] w-full max-w-xl -translate-x-1/2 px-4"
            onKeyDown={handleKeyDown}
          >
            <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-stone-200 overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-stone-100">
                <svg className="shrink-0 text-stone-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={s.placeholder}
                  className="flex-1 bg-transparent text-stone-800 placeholder-stone-400 outline-none text-base"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-stone-400 hover:text-stone-600 transition-colors">
                    <X size={16} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="text-xs text-stone-400 hover:text-stone-600 transition-colors border border-stone-200 rounded px-1.5 py-0.5 font-mono"
                >
                  Esc
                </button>
              </div>

              {/* Results */}
              {query.trim().length >= 2 && (
                <div className="max-h-[60vh] overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="px-5 py-8 text-center text-stone-400 text-sm">{s.noResults}</p>
                  ) : (
                    <ul ref={listRef} className="py-2">
                      {grouped.map(({ item, index, showHeader }) => (
                        <React.Fragment key={`${item.type}-${item.url}`}>
                          {showHeader && (
                            <li className="px-4 pt-3 pb-1">
                              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                                {typeIcon(item.type)}
                                {typeLabel(item.type)}
                              </span>
                            </li>
                          )}
                          <li>
                            <button
                              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                activeIndex === index ? 'bg-amber-50' : 'hover:bg-stone-50'
                              }`}
                              onMouseEnter={() => setActiveIndex(index)}
                              onClick={() => select(item)}
                            >
                              {item.thumbnail ? (
                                <img
                                  src={item.thumbnail}
                                  alt=""
                                  className="w-10 h-10 rounded-lg object-cover shrink-0"
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center shrink-0">
                                  {typeIcon(item.type)}
                                </div>
                              )}
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-stone-800 truncate">{item.title}</p>
                                <p className="text-xs text-stone-500 truncate">{item.subtitle}</p>
                              </div>
                            </button>
                          </li>
                        </React.Fragment>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
