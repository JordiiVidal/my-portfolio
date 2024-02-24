import Footer from "@layout/footer";
import Header from "@layout/header";
import { About, Stack, Work } from "./pages";

export default function Home() {
  return (
    <main className="md:max-w-2xl mx-auto">
      <Header />
      <div className="md:px-2 px-10">
        <About />
        <Stack />
        <Work />
      </div>
      <Footer />
    </main>
  );
}
