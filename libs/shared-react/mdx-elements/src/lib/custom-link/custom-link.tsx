import Link from 'next/link';
/* eslint-disable-next-line */
export interface CustomLinkProps {
  as?: string;
  href: string;
  content?: string;
}

export const CustomLink = ({ as, href,content, ...otherProps}: CustomLinkProps) => (
  <Link href={href} as={as}>
    <a {...otherProps}>{content}</a>
  </Link>
);
