import type { Metadata } from "next";
import { inter } from '@/app/fonts/inter';
import '@/app/styles/global.css';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jordi Vidal Roselló",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
