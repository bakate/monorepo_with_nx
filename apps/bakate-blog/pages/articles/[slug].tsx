import { getParsedFileContentBySlug, MarkdownRenderingResult, renderMarkdown } from "@bakate-organization/markdown";
import { mdxElements } from "@bakate-organization/shared-react/mdx-elements";
import { MDXRemote } from 'next-mdx-remote';
import * as fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";


export interface ArticleProps extends ParsedUrlQuery {
  slug?: string;

}
const POSTS_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export default function Slug({ frontMatter, html}) {
  return (
    <div>
      <article>
        <h1>
          {frontMatter.title}
        </h1>
        <div>by {frontMatter.author?.name}</div>
        <hr />

        <MDXRemote {...html} components={mdxElements} />
      </article>
    </div>
  );
}


export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({ params }: {params:ArticleProps}) => {
  const articleMarkdownContent = getParsedFileContentBySlug(params.slug, POSTS_PATH);

  // generate HTML from MDX file
  const HTMLContent = await renderMarkdown(articleMarkdownContent.content);
  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: HTMLContent,
    } // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync(POSTS_PATH).map(file => ({
    params: {
      // Remove file extensions for page paths
      slug: file.replace(/.mdx?$/, "")
    }
  }));
  return {
    paths,
    fallback: false
  };
};
