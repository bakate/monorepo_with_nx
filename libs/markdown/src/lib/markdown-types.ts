import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export interface FrontMatter {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
  };
  tags?: string[];
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}
