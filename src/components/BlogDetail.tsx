import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, BookOpen, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../i18n';
import posts from '../data/blog';

const PAYPAL_CLAUDE = 'https://www.paypal.com/ncp/payment/R7ZQ2BSCC6ZEG';
const PAYPAL_AI = 'https://www.paypal.com/ncp/payment/JBKRH44BDQS3Q';
const PAYPAL_VIETNAM = 'https://www.paypal.com/ncp/payment/A6LQKRNC6TXHW';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const b = t.blog;

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="flex-grow pt-32 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-6xl mb-4">📭</p>
          <h1 className="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-100">{b.notFound}</h1>
          <Link to="/blog" className="text-amber-700 dark:text-amber-400 font-semibold hover:underline">{b.back}</Link>
        </div>
      </main>
    );
  }

  const title = lang === 'fr' ? post.title : post.titleEn;
  const content = lang === 'fr' ? post.content : post.contentEn;
  const category = lang === 'fr' ? post.category : post.categoryEn;

  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Back */}
      <div className="max-w-3xl mx-auto px-6 pt-8 mb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors text-sm font-medium">
          <ArrowLeft size={15} />
          {b.back}
        </Link>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 mb-12"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500 flex items-center gap-1">
            <Clock size={11} />
            {post.readTime} min
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500">
            {new Date(post.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
          {title}
        </h1>

        {/* Thumbnail */}
        <div className="w-full rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-stone-800 dark:to-stone-700 flex items-center justify-center py-10">
          <img
            src={post.thumbnail}
            alt={title}
            className="h-64 object-contain drop-shadow-2xl"
          />
        </div>
      </motion.header>

      {/* Article body */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-3xl mx-auto px-6"
      >
        <div className="prose prose-stone dark:prose-invert max-w-none">
          {content.map((section, i) => {
            switch (section.type) {
              case 'paragraph':
                return (
                  <p key={i} className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-5">
                    {section.text}
                  </p>
                );
              case 'heading':
                return (
                  <h2 key={i} className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-12 mb-4">
                    {section.text}
                  </h2>
                );
              case 'list':
                return (
                  <ul key={i} className="mb-5 space-y-2">
                    {section.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-stone-700 dark:text-stone-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'quote':
                return (
                  <blockquote key={i} className="my-8 pl-6 border-l-4 border-amber-500 dark:border-amber-400">
                    <p className="text-xl font-serif font-semibold text-stone-800 dark:text-stone-200 italic leading-relaxed">
                      {section.text}
                    </p>
                  </blockquote>
                );
              case 'gallery':
                return (
                  <div key={i} className={`my-8 grid gap-3 ${section.images?.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {section.images?.map((src, j) => (
                      <div key={j} className="rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 aspect-[4/3]">
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Ebook CTA */}
        {post.ebookCta && (() => {
          const isAI = post.ebookType === 'ai';
          const isVietnam = post.ebookType === 'vietnam';
          const paypalUrl = isAI ? PAYPAL_AI : isVietnam ? PAYPAL_VIETNAM : PAYPAL_CLAUDE;
          const ebookAnchor = isAI ? '/ebook#ebook-ai' : isVietnam ? '/ebook#ebook-vietnam' : '/ebook';
          const accentColor = isAI
            ? 'from-violet-50 to-purple-50 dark:from-stone-800 dark:to-stone-800 border-violet-100 dark:border-stone-700'
            : isVietnam
            ? 'from-teal-50 to-emerald-50 dark:from-stone-800 dark:to-stone-800 border-teal-100 dark:border-stone-700'
            : 'from-amber-50 to-orange-50 dark:from-stone-800 dark:to-stone-800 border-amber-100 dark:border-stone-700';
          const btnColor = isAI
            ? 'bg-violet-600 hover:bg-violet-700'
            : isVietnam
            ? 'bg-teal-600 hover:bg-teal-700'
            : 'bg-amber-600 hover:bg-amber-700';
          const badgeColor = isAI
            ? 'text-violet-700 dark:text-violet-400'
            : isVietnam
            ? 'text-teal-700 dark:text-teal-400'
            : 'text-amber-700 dark:text-amber-400';
          const ebookTitle = isAI
            ? (lang === 'fr' ? "L'IA pour les débutants" : 'AI for Beginners')
            : isVietnam
            ? (lang === 'fr' ? 'Travel Guide Vietnam' : 'Travel Guide Vietnam')
            : (lang === 'fr' ? 'Crée ton site web avec Claude Code' : 'Build your website with Claude Code');
          const ebookDesc = isAI
            ? (lang === 'fr' ? 'Maîtrise le prompt engineering et utilise l\'IA comme un pro — 9,99$' : 'Master prompt engineering and use AI like a pro — $9.99')
            : isVietnam
            ? (lang === 'fr' ? 'Le guide complet pour voyager au Vietnam — restos, hébergements, bons plans — 9,99$' : 'The complete guide to travelling Vietnam — restaurants, stays, tips — $9.99')
            : (lang === 'fr' ? 'Le guide pratique du terminal à la mise en ligne — 9,99$' : 'The practical guide from terminal to deployment — $9.99');
          const buyLabel = lang === 'fr' ? 'Acheter — 9,99$' : 'Buy — $9.99';

          return (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`mt-16 p-8 bg-gradient-to-br ${accentColor} rounded-3xl border flex flex-col sm:flex-row items-center gap-6`}
            >
              <img src={post.thumbnail} alt="" className="w-24 shrink-0 drop-shadow-xl" />
              <div className="flex-1 text-center sm:text-left">
                <p className={`text-xs font-bold ${badgeColor} uppercase tracking-wider mb-2`}>
                  {lang === 'fr' ? 'E-book disponible' : 'E-book available'}
                </p>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mb-2">
                  {ebookTitle}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-4">
                  {ebookDesc}
                </p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <a
                    href={paypalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${btnColor} text-white px-6 py-3 rounded-full font-bold text-sm transition-colors shadow-md`}
                  >
                    <ShoppingCart size={15} />
                    {buyLabel}
                  </a>
                  <Link
                    to={ebookAnchor}
                    className="inline-flex items-center gap-2 bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-stone-50 dark:hover:bg-stone-600 transition-colors"
                  >
                    <BookOpen size={15} />
                    {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </motion.div>
    </main>
  );
}
