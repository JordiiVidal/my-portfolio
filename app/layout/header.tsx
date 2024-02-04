import Link from "next/link";

const navigations = [
    { name: "Home" , link: "#"},
    { name: "Stack" , link: "#"},
    { name: "Work" , link: "#"},
    { name: "Projects" , link: "#"},
];
  
export default function Header() {
    return (
        <header>
            <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/500  border-zinc-800 ">
                <nav className="container flex flex-row items-center justify-center p-6 mx-auto">
                    <ul className="flex justify-between gap-8">
                        {navigations.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.link}

                                className="duration-200 text-zinc-400 hover:text-zinc-100" 
                            >
                                { item.name }
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}