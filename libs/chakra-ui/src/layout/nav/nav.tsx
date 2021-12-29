/* eslint-disable-next-line */
import { Box  } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/router";

export interface NavProps {
navLinks: {
  href: string;
  label: string;
}[]
}
export function ChakraNav({navLinks}: NavProps) {

  const router = useRouter();
  const generateLinks = () =>
    navLinks.map((link, index) => (
      <Box
        fontWeight="bold"
        key={index}
        p={2}
        textTransform="uppercase"
        opacity={router.pathname === link.href ? 1 : 0.5}
        cursor="pointer"
      >
        <Link href={link.href}>{link.label}</Link>
      </Box>
    ));


  return (
    <>
      {generateLinks()}
    </>
  );
}

