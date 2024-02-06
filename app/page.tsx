
import About from '@/app/content/about';
import Stack from '@/app/content/stack';
import Work from '@/app/content/work';
import Header from "@layout/header";

export default function Home() {
  return (
    <main>
      {<Header />}
      <div className='mt-28 px-5'>
        {<About />}
        {<Stack/>}
        {<Work/>}
      </div>
    </main>
  );
}
