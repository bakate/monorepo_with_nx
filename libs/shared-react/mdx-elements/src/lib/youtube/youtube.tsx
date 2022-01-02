import { AspectRatio } from '@chakra-ui/react'

export interface YoutubeProps {
  title: string;
  uid: string;
  fullScreen?: boolean;
  width?: string;
}

export function Youtube(props: YoutubeProps) {
  return (
      <AspectRatio maxW={{ base: "500px", md: props.width ?? "700px"}} ratio={4/3}>
        <iframe
          title={props.title}
          src={`https://www.youtube.com/embed/${props.uid}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={props.fullScreen}
        />
      </AspectRatio>

  );
}

export default Youtube;
