import Image from "next/image";
import Link from "next/link";

const navigations = [
    { name: "Home" , link: "#about"},
    { name: "Stack" , link: "#stack"},
    { name: "Work" , link: "#work"},
    { name: "Projects" , link: "#"},
];
  
export default function Header() {
    return (
        <header>
            <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/500  border-zinc-800 ">
                <nav className="container flex justify-between p-6 mx-auto">
                    <div className="font-semibold">Portfolio.</div>
                    <div className="static md:hidden">
                        <Image 
                            src="/header/menu.svg"
                            alt="menu"
                            width={20}
                            height={20}
                        />
                    </div>
                    <ul className="hidden md:flex justify-between gap-8">
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