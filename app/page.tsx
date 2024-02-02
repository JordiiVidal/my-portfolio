
import { headerNavigation, tecnologies } from "./lib/placeholder-data";
import Header from "@/app/ui/layout/header";
import About from '@sections/about';
import Stack from '@sections/stack';
import Work from '@sections/work';
import Projects from '@sections/projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-3xl mx-auto px-4">
      {<Header links={headerNavigation} />}
      {<About />}
      {<Stack tecnologies={tecnologies}/>}
      {<Work />}
      {<Projects />}
    </main>
  );
}
