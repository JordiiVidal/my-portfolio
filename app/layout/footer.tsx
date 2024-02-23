import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rounded-lg shadow m-4 bg-gray-800 md:mt-48 mt-28">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-xs text-center text-gray-400">
          © {year} <Link href="#">Portfolio.</Link> All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
