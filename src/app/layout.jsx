import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import SideBar from "@/component/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[80%] mx-auto border border-slate-500 h-screen">
        <Navbar/>  
        <div className="flex gap-4">
          <SideBar/>
        {children}
        </div>

        </main>
      </body>
    </html>
  );
}
