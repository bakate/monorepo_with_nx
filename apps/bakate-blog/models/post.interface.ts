import { FrontMatter } from "@bakate-organization/markdown";

export interface Post {
  frontMatter: FrontMatter
  slug: string
}
