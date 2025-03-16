"use client";

import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./shared/page-transitions";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${firaCode.className} overflow-x-hidden overflow-y-auto`}>
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Header></Header>
            {children}
            <Footer></Footer>
          </PageTransition>
        </AnimatePresence>
      </body>
    </html>
  );
}
