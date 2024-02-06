"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigations = [
    { name: "Home" , link: "#about"},
    { name: "Stack" , link: "#stack"},
    { name: "Work" , link: "#work"},
    { name: "Projects" , link: "#"},
];
  
export default function Header() {

    const [isOpen, setOpen] = React.useState(false);
    
    function handleClick(){
        setOpen(!isOpen);
    }
    
    return (
        <header>
            <div className="fixed inset-x-0 top-0 z-50 md:backdrop-blur backdrop-blur-2xl duration-200 border-b  bg-zinc-900/500  border-zinc-800 ">
                <nav className="container grid md:grid-cols-3 grid-cols-2 p-6 mx-auto">
                    <div className="font-semibold">Portfolio.</div>
                    <button className="flex md:hidden justify-end" onClick={handleClick}>
                        <Image 
                            src={`/header/${isOpen ? 'close' : 'menu'}.svg`}
                            alt="menu"
                            width={20}
                            height={20}
                        />
                    </button>
                    <ul className={`${isOpen ? 'flex' : 'hidden'} duration-500 md:flex md:flex-row flex-col md:justify-between justify-center gap-8 md:h-fit h-[70vh]`}>
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