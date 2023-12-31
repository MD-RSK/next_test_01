import Link from 'next/link';

function Header() {
  return <div className="min-w-full lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="flex items-center justify-between py-4 md:py-8">
        {/* logo - start */}
        <Link href="/" className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
          <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M96 0V47L48 94H0V47L48 0H96Z" /></svg>
          CLab.
        </Link>
        {/* logo - end */}
  
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          <Link href="/" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">Home</Link>
          <Link href="/blog/category_id/entry_01/" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">Features</Link>
          <Link href="/blog/category_id/entry_02/" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">Pricing</Link>
          <Link href="/blog/category_id/entry_03/" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">About</Link>
        </nav>
        {/* nav - end */}
  
        {/* buttons - start */}
        <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <Link href="#" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-red-300 transition duration-100 hover:text-red-500 focus-visible:ring active:text-red-600 md:text-base">Sign in</Link>
          <Link href="#" className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Sign up</Link>
        </div>
  
        <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-red-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
          Menu
        </button>
        {/* buttons - end */}
      </header>
    </div>
  </div>;
  
}

export default Header;