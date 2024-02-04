import Image from 'next/image';
import Link from 'next/link';

interface ButtonLinkProps {
    text: string;
    icon: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({text, icon }) => {
    return (
        <div className="group">
            <Link
                href="#"
                className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-black rounded flex items-center justify-between px-4 py-2 w-full gap-x-4"
            >
                <div className="flex gap-5">
                    <Image 
                        src={icon}
                        alt={text}
                        width={16}
                        height={16}
                    />
                    <p className="font-normal text-neutral-900 dark:text-neutral-100">{ text }</p>
                </div>
                <Image 
                    src="buttons/external-link.svg"
                    alt={text}
                    width={10}
                    height={10}
                    className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12"
                />
            </Link>
        </div>
    )
}

export default ButtonLink;