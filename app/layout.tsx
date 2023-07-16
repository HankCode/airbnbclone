import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Modal from "@/components/modals/Modal";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neville",
  description: "The playground of Neville",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Modal isOpen title={"Login Modal"} actionLabel="Submit" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
