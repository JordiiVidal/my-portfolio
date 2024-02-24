import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { inter } from "@/app/fonts/inter";
import "@/app/styles/global.css";

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
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
