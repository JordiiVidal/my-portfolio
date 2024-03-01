import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import Footer from "@layout/footer";
import Header from "@layout/header";
import { inter } from "./fonts/inter";
import { Providers } from "./providers";
import "./styles/global.css";

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
    <html lang="es" className={inter.className}>
      <body
        suppressHydrationWarning={true}
        className="bg-gray-100 dark:bg-slate-950"
      >
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
