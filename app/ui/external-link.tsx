import Image from 'next/image';

export default function ExternalLink({icon, text} : {icon: string, text: string}){
    return (
        <span className="not-prose mx-2">
            <a href="https://vercel.com/home" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline px-2">
                <Image
                    src={`/icons/${icon}`}
                    className="rounded-full mr-2"
                    alt={`${text}'s profile picture`}
                    width={16}
                    height={16}
                />
                { text }
            </a>
        </span>
    )
}