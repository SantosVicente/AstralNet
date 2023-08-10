import './globals.css';
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google';
import { AuthProvider } from '@/contexts/Auth/authProvider';

import Parceiros from '@/components/Parceiros';
import AboutUs from '@/components/AboutUs';
import Header from '@/components/Header';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-bai-jamjure',
});

export const metadata = {
  title: 'Astral NET',
  description: 'A astronomia explicada de maneira simples',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-rob bg-blue-950 text-zinc-50 overflow-x-hidden`}
      >
        <AuthProvider>
          <Header />

          {children}

          {/*Stripes*/}
          <div className="bg-stripes h-2" />

          {/*Parceiros*/}
          <Parceiros />

          {/*Sobre Nós*/}
          <AboutUs />
          {/*Footer*/}
        </AuthProvider>
      </body>
    </html>
  );
}
