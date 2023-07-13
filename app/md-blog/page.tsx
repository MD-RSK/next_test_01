import Link from 'next/link';
type Entries = {
  id: string,
  title: string,
  body: string,
};

const Page = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const entries: Entry[] = await response.json();
//  console.log(Entries);
  return (
<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  <div className="mb-10 md:mb-16">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>
    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
  </div>
  <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
  {entries.map((entry) => (
    <Link href="#" className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
      <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
      <div className="relative mt-auto p-4">
        <span className="block text-sm text-gray-200">July 19, 2021</span>
        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">{entry.title}</h2>
        <span className="font-semibold text-indigo-300">Read more</span>
      </div>
    </Link>
  ))}
  </div>
</div>
)
};

export default Page;
