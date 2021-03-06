import { TimeIcon } from "@chakra-ui/icons";
import { AspectRatio, Avatar, Box, Button, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../models/post.interface";

interface ArticleProps {
  post: Post

}
const Article = ({post}:ArticleProps) => {
  const { frontMatter: {author, date, title, image, excerpt, readingTime}, slug } =   post;
  return (
    <Skeleton isLoaded>
      <Link href={`/articles/${slug}`} passHref>
        <Flex
        flexDir="column"
        borderRadius="lg"
        justifyContent="space-between"
        transition="all linear 0.3s"
        border="1px solid gray"
        _hover={{ boxShadow: "lg", cursor: "pointer", transform: "translateY(-5px)", opacity: "0.8" }}>
        <AspectRatio ratio={4/3} _before={{ paddingBottom: "0" }}>
            <Image
              priority={true}
              layout={"responsive"}
              src={`/blog_images/${image}`}
              alt={title}
              width="350"
              blurDataURL={`/blog_images/${image}`}
              placeholder="blur"
              objectFit="cover"
              quality={100}
              height="150" />
        </AspectRatio>
        <Heading as="h3" size="md" textAlign={"center"} pt={2}>
          {title}
        </Heading>
        <Text p={2}>{excerpt}</Text>
        <Flex justify={"space-between"} p={2}>

          <Flex><Avatar src={'/bakate.png'} mr={4} />
            <Box d={"flex"} flexDir={"column"}>
              <Text textAlign={'left'} >{author.name}</Text>
              <Text fontWeight={"thin"}  color='gray.300'>{new Date(date).toLocaleDateString()}
                <TimeIcon mx={2}/>
                {readingTime.text}</Text>
            </Box></Flex>
          <Link href={`/articles/${slug}`} passHref><Button variant={"ghost"}>
           lire
          </Button></Link>
        </Flex>
      </Flex>
      </Link>
    </Skeleton>
  );
};
export default Article;



