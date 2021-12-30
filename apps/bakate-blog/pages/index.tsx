import { FrontMatter, getParsedFileContentBySlug } from "@bakate-organization/markdown";
import { Grid } from "@chakra-ui/react";
import fs from "fs";
import { GetStaticProps } from "next";
import { join } from "path";
import Article from "../components/article/article";
import { Post } from "../models/post.interface";




interface IndexProps {
  posts: Post[]
}
export function Index({posts}: IndexProps) {

    return (
          <Grid
            templateColumns='repeat(auto-fit, minmax(350px, 1fr))'
            gap={{ base: 4, md: 10 }}
            justifyContent='space-evenly'
            alignItems='center'>
            {posts.map((post, index:number) => (
              <Article post={post}  key={index}/>
            ))}
          </Grid>

    );

}

export default Index;

const POSTS_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export const getStaticProps: GetStaticProps = async () => {

  const files = fs.readdirSync(POSTS_PATH);
  const posts = files.map((fileName:string) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const {frontMatter }  = getParsedFileContentBySlug(slug, POSTS_PATH);
    return { slug, frontMatter } as { slug: string, frontMatter: FrontMatter };
  });

  return {
    props:  {
      posts
    }
  };
};

