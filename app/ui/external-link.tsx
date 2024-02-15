import Image from 'next/image';
import Link from 'next/link';

interface ExternalLinkProps {
    text: string;
    icon?: string;
  }

const ExternalLink: React.FC<ExternalLinkProps> = ({text, icon }) => {
    return (
        <span className="not-prose border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline py-0.5 px-2 cursor-default">
            {icon && <Image
                src={`/icons/${icon}`}
                className="rounded-full mr-2"
                alt={`${text}'s profile picture`}
                width={16}
                height={16}
            />}
            { text }
        </span>
    )
}

export default ExternalLink;