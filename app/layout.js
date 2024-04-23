import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Chatbot from '@/components/chatbot'

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata = {
  // title: 'Piotr Jura',
  // description: 'Piotr Jura Portfolio',
  title: {
    template: '%s | Piotr Jura',
    default: 'Piotr Jura'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="mt-12">
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  );
}
