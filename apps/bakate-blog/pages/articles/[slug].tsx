import { getParsedFileContentBySlug, MarkdownRenderingResult, renderMarkdown } from "@bakate-organization/markdown";
import { mdxElements } from "@bakate-organization/shared-react/mdx-elements";
import { Box } from "@chakra-ui/react";
import * as fs from "fs";
import highlight from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/vs2015.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

highlight.registerLanguage('typescript', typescript);

export interface ArticleProps extends ParsedUrlQuery {
  slug?: string;

}
const POSTS_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export default function Slug({ frontMatter, html}) {


  useEffect(() => {
    highlight.highlightAll();
  }, []);


  return (
    <>
        <Box maxW={{base:'500px', md: '700px'}}><MDXRemote {...html} components={mdxElements} /></Box>
    </>
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
