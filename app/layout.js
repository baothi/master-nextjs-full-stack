import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Chatbot from '@/components/chatbot'
import useServerDarkMode from '@/hooks/use-server-dark-mode'

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
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={theme}>
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
