import React from "react";

import ExternalLink from "@ui/external-link";

interface TextWithLinksProps {
  children: string;
}

const transformTextWithLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)]/g;

  const segments = text.split(linkRegex).map((segment, index) => {
    if (index % 2 === 1) {
      return <ExternalLink key={index} text={segment} />;
    }
    return segment;
  });

  return segments;
};

const TextWithLinks: React.FC<TextWithLinksProps> = ({ children }) => {
  return <>{transformTextWithLinks(children)}</>;
};

export default TextWithLinks;
