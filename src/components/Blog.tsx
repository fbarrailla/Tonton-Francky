import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import posts from '../data/blog';

export default function Blog() {
  const { lang, t } = useLanguage();
  const b = t.blog;

  return (
    <main className="flex-grow pt-24">
      {/* Hero */}
      <section className="pt-16 pb-14 px-6 bg-gradient-to-br from-stone-50 to-amber-50/40 dark:from-stone-900 dark:to-stone-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold">
              <BookOpen size={14} />
              Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">{b.title}</h1>
            <p className="text-xl text-stone-500 dark:text-stone-400 max-w-xl mx-auto">{b.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row gap-6 bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-800 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Thumbnail */}
                  <div className="shrink-0">
                    <div className="relative w-full sm:w-40 h-48 sm:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-stone-800 dark:to-stone-700 flex items-center justify-center">
                      <img
                        src={post.thumbnail}
                        alt={lang === 'fr' ? post.title : post.titleEn}
                        className="h-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full">
                          {lang === 'fr' ? post.category : post.categoryEn}
                        </span>
                        <span className="text-xs text-stone-400 dark:text-stone-500 flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime} min
                        </span>
                        <span className="text-xs text-stone-400 dark:text-stone-500">
                          {new Date(post.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <h2 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
                        {lang === 'fr' ? post.title : post.titleEn}
                      </h2>
                      <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                        {lang === 'fr' ? post.excerpt : post.excerptEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-sm font-semibold mt-4">
                      {b.readMore}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
