import './globals.css'
import { Inter } from 'next/font/google'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
{/*        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous">
        </link>
*/}
      </head>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col items-center justify-between'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
