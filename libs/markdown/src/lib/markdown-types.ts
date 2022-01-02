import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReadTimeResults } from "reading-time";
export interface FrontMatter {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
  };
  tags?: string[];
  readingTime: ReadTimeResults;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}
