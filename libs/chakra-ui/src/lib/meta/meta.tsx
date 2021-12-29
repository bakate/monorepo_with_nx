import Head from 'next/head';

export interface MetaProps {
  title?: string;
  description?: string;
  favicon?: string;
  url?: string;
}

export function Meta(props: MetaProps) {
  const { title, description, favicon, url } = props;
  return (
    <Head>
     <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon} />
      <link rel="stylesheet" type="text/css" href={url} />
      <title>{title}</title>
    </Head>
  );
}

