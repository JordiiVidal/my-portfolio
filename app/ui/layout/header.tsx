import Link from "next/link";
import { NavigationLink } from "../../lib/definitions";

export default function Header({links}:{links : NavigationLink[]}) {
    return (
        <header>
            <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/500  border-zinc-800 ">
                <div className="container flex flex-row items-center justify-center p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        {links.map((link) => (
                            <Link 
                                key={link.name}
                                className="duration-200 text-zinc-400 hover:text-zinc-100" 
                                href="#"
                            >
                                { link.name }
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}