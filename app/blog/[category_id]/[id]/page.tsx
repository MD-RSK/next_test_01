import Link from 'next/link';

const Page = ({
  params,
}: {
  params: { category_id: string,id: string },
}) => {
  return (
    <div className="flex flex-col items-center m-[120px] p-[7px]">
      <h1 className="text-2xl">BLOG PAGE</h1>
      <p>Category ID: {params.category_id}</p>
      <p>Entry ID: {params.id}</p>
    </div>
  );
};

export default Page;
