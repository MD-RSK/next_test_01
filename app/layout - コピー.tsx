'use client';

import { Inter } from 'next/font/google'
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
{/*
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'

import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AnimationControls, motion } from "framer-motion";
import PageTransition from 'components/ui/PageTransition'
*/}

import './globals.css'
import Header from 'components/base/Header'
import Footer from 'components/base/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}





{/*
const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence mode="wait">
    <Component key={router.usePathname} {...pageProps} />
  </AnimatePresence>
)

export default MyApp


function App() {
  return (
    <div className="App">
    <Header />
    <motion.div animate={{ rotate: 135 }} transition={{ duration: 3 }}>
        <Link href="https://vitejs.dev" target="_blank">
          <Image src="logo_md.svg" className="logo" alt="Vite logo" width={500} height={500} />
        </Link>
      </motion.div>
    <Footer />
  </div>
  );
}

export default App;




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div animate={{ rotate: 135 }} transition={{ duration: 3 }}>
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
          <div className='flex min-h-screen flex-col items-center justify-between'>
            <Header />
              <Link href="https://vitejs.dev" target="_blank">
                <Image src="logo_md.svg" className="logo" alt="Vite logo" width={500} height={500} />
              </Link>
            {children}
            <Footer />
          </div>
      </body>
    </html>
    </motion.div>
  )
}
*/}



export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/amsterdam",
      element: (
        <Gallery
          photos={amsterdamPhotosMetadata}
          title="Amsterdam Zuid nightwalk"
          titleWidth={8.2}
          category="zuid"
          alt="A building in Amsterdam Zuid at night"
        />
      )
    },
    {
      path: "/london",
      element: (
        <Gallery
          photos={londonPhotosMetadata}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="canary"
          alt="A building in Canary Wharf"
        />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
