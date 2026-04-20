import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1 text-xs text-stone-400 dark:text-stone-500">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={11} className="shrink-0" />}
              {!isLast && crumb.to ? (
                <Link
                  to={crumb.to}
                  className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-stone-600 dark:text-stone-400 font-medium truncate max-w-[200px]' : ''}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
