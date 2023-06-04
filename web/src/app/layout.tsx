import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-bai-jamjure",
});

export const metadata = {
  title: "Astral Nexus",
  description: "A astronomia explicada de maneira simples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-rob bg-blue-950 text-zinc-50`}
      >
        {children}
        
        {/*Stripes*/}
        <div className="bg-stripes h-2" />

        {/*Sobre Nós*/}
        <AboutUs />

        {/*Parceiros*/}
        {/*Footer*/}
      </body>
    </html>
  );
}
