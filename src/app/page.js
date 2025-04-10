import Link from "next/link";

export default function Home() {
  return (
    <>
      <span className='col-span-1' />
      <div className='col-span-3 flex flex-col justify-center items-center'>
        <h1 className='text-base-height/30 text-center'>
          Paz Seja Convosco
        </h1>
        <div className='flex flex-row gap-10 mt-20'>
          <Link className="bg-linear-to-b from-gradientButtonStart/100 from-0% to-gradientButtonEnd/100 to-100% py-3 px-10 text-button rounded-xl hover:opacity-80 active:opacity-60" href="/books">Livros</Link>
          <Link className="bg-linear-to-b from-gradientButtonStart/100 from-0% to-gradientButtonEnd/100 to-100% py-3 px-10 text-button rounded-xl hover:opacity-80 active:opacity-60" href={{}}>Sobre</Link>
        </ div>
      </div>
      <span className='col-span-1' />
    </>
  );
}
