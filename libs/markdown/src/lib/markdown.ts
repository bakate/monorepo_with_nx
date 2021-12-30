import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import {MarkdownDocument} from "./markdown-types";

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
):MarkdownDocument => {

  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const {data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};

export const renderMarkdown =  (markdownContent: string) => serialize(markdownContent ?? '')
