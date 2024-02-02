export default function Title({ text }: { text: string }){
    return (
        <span className="text-center bg-gradient-to-r from-blue-500 dark:from-blue-400 to-cyan-400 dark:to-cyan-400 via-teal-500 dark:via-teal-500 via-40% bg-clip-text text-transparent font-bold text-3xl lg:text-5xl">
            { text }
        </span>
    );
}