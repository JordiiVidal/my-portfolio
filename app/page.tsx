import About from "@components/about";
import Stack from "@components/stack";
import Work from "@components/work";
import Header from "@layout/header";
import Footer from "@layout/footer";

export default function Home() {
  return (
    <main className='md:max-w-2xl mx-auto'>
      <Header/>
      <div className="px-5">
        <About />
        <Stack />
        <Work />
      </div>
      <Footer />
    </main>
  );
}
