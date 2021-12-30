import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import { FrontMatter, MarkdownDocument } from "./markdown-types";

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
):MarkdownDocument => {

  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const {data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatter,
    content,
  };
};

export const renderMarkdown =  (markdownContent: string) => serialize(markdownContent ?? '')
