import dynamic from 'next/dynamic';
import { CustomLink } from './custom-link/custom-link';

// you can also re-map the components, like
export const mdxElements = {
  a: CustomLink,
  YoutubeVideo:  dynamic(() => import('./youtube/youtube')),
};
