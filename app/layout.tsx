import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { inter } from "./fonts/inter";
import "./styles/global.css";
import { Providers } from "./providers";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata: Metadata = {
  title: "Jordi Vidal",
  description:
    "Hello, I'm Jordi Vidal Roselló. I Full-Stack Developer from Barcelon.",
  applicationName: "Jordi Vidal Portfolio",
  authors: [{ name: "Jordi Vidal" }],
  generator: "Next.js",
  keywords: [
    "portfolio",
    "development",
    "opportunity",
    "employee",
    "angular",
    "javascript",
    "typescript",
    "full stack development",
    "front end development",
  ],
  creator: "Jordi Vidal",
  publisher: "Jordi Vidal",
  metadataBase: new URL("https://my-portfolio-vidiic.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.className}>
      <body className="bg-zinc-900">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
