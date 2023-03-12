import NextLink from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = (props: LinkProps) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink {...props} href={href}>
        {props.children}
      </NextLink>
    );
  }

  return <NextLink target="_blank" rel="noopener noreferrer" {...props} />;
};

export default Link;
