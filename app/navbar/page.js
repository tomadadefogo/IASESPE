import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex justify-center items-center">
      <section className="bg-white p-8 w-4/5 shadow-lg rounded-2xl mt-6">
        <nav className="flex flex-wrap justify-between font-sans">
          <Link className="mx-2 transition ease-in-out duration-0 hover:duration-300 hover:text-red-800 flex items-center" href="/">
            <Image
              src='/ongdoskate.png'
              alt='logo'
              width={90}
              height={90}          
            />
          </Link>
          <Link className="mx-2 transition ease-in-out duration-0 hover:duration-300 hover:text-red-800 flex items-center" href="/">Sobre nós</Link>
          <Link className="mx-2 transition ease-in-out duration-0 hover:duration-300 hover:text-red-800 flex items-center" href="/">Galeria</Link>
          <Link className="mx-2 transition ease-in-out duration-0 hover:duration-300 hover:text-red-800 flex items-center" href="/">Seja um Voluntário</Link>
          <Link className="mx-2 transition ease-in-out duration-0 hover:duration-300 hover:text-red-800 flex items-center" href="/">Mensagens</Link>
          <Link className="mx-2 transition ease-in-out duration-0 hover:duration-300 hover:text-red-800 flex items-center" href="/">Notícias</Link>
          <Link className="bg-[#FF6600] rounded-xl p-6 hover:bg-orange-500 hover:text-white shadow-md flex items-center" href="/">Faça uma doação</Link>
        </nav>
      </section>
    </div>
  )
}