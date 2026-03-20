/**
 * Augments React's VideoHTMLAttributes to include fetchPriority,
 * which exists in the HTML spec but is missing from @types/react's
 * VideoHTMLAttributes (it was only added to ImgHTMLAttributes).
 */
import 'react';

declare module 'react' {
  interface VideoHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto';
  }
}
