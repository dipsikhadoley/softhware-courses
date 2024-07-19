import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar  from '@/components/Navbar';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-commerce-Admin Dashboard",
  description: "e-commerce dashboard to manage Findall data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
     <div className="relative w-full flex items-center justify-center ">
     <Navbar/>
    
     </div>
      <body className={inter.className}>
      {children}</body>
    
    </html>
    
  );
}
