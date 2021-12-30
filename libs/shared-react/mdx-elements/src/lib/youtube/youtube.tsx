import { AspectRatio } from '@chakra-ui/react'

export interface YoutubeProps {
  title: string;
  uid: string;
  fullScreen?: boolean;
}

export function Youtube(props: YoutubeProps) {
  return (
      <AspectRatio w='560px' ratio={1}>
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
