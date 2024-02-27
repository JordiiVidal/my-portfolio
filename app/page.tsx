import { About, Stack, Work } from "./pages";

export default function Home() {
  return (
    <main className="md:max-w-2xl mx-auto md:px-2 px-10">
      <About />
      <Stack />
      <Work />
    </main>
  );
}
