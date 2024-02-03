
import Header from "@/app/layout/header";
import About from '@/app/content/about';
import Stack from '@/app/content/stack';
import Work from '@/app/content/work';
import Projects from '@/app/content/projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-3xl mx-auto px-4">
      {<Header />}
      {<About />}
      {<Stack/>}
      {<Work/>}
      {<Projects />}
    </main>
  );
}
