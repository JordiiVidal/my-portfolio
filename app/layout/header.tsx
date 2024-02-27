"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const navigations = [
  { name: "Home", link: "#about" },
  { name: "Stack", link: "#stack" },
  { name: "Work", link: "#work" },
];

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  function handleClick() {
    setOpen(!isOpen);
  }

  function handleLinkClick() {
    if (isOpen) {
      setOpen(false);
    }
  }

  return (
    <header>
      <div className="fixed inset-x-0 top-0 z-50 md:backdrop-blur backdrop-blur-2xl duration-200 border-b  bg-zinc-900/500  border-zinc-800 ">
        <nav className="container grid md:grid-cols-3 grid-cols-2 p-4 mx-auto items-center">
          <div className="font-semibold text-base">Portfolio.</div>
          <button className="flex md:hidden justify-end" onClick={handleClick}>
            <Image
              src={`/header/${isOpen ? "close" : "menu"}.svg`}
              alt="menu"
              width={20}
              height={20}
            />
          </button>
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } duration-500 md:flex md:flex-row flex-col justify-center md:gap-6 gap-8 md:h-fit h-[100vh]`}
          >
            {navigations.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={handleLinkClick}
                className="md:text-header text-2xl duration-200 text-zinc-400 hover:text-zinc-200"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
