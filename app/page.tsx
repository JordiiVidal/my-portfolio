
import About from '@/app/content/about';
import Stack from '@/app/content/stack';
import Work from '@/app/content/work';
import Header from "@layout/header";
import Footer from './layout/footer';

export default function Home() {
  return (
    <main className='md:max-w-2xl mx-auto'>
      {<Header />}
      <div className='md:mt-48 mt-28 px-5'>
        {<About />}
        {<Stack/>}
        {<Work/>}
      </div>
      {<Footer />}
    </main>
  );
}
