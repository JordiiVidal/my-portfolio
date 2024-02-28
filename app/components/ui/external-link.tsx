import Image from "next/image";

interface ExternalLinkProps {
  text: string;
  icon?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, icon }) => {
  return (
    <span className="not-prose border border-neutral-300 dark:border-neutral-700 bg-stone-100 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100 rounded text-xs inline-flex items-center leading-4 no-underline py-0.5 px-2">
      {icon && (
        <Image
          src={`/icons/${icon}`}
          className="rounded-full mr-2"
          alt={`${text}'s profile picture`}
          width={16}
          height={16}
        />
      )}
      {text}
    </span>
  );
};

export default ExternalLink;
