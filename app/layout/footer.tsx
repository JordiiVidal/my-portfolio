import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 md:mt-48 mt-28">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © {year} <Link href="#">Portfolio.</Link> All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
