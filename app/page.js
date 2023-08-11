'use client'

import Link from 'next/link'
import Image from 'next/image'
export default function page() {
  return (
    <>
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
          <Link className="bg-orange-500 rounded-xl p-6 hover:bg-orange-500 hover:text-white shadow-md flex items-center" href="/">Faça uma doação</Link>
        </nav>
      </section>
    </div>
    <section className='relative mt-12'>
  <div  className="relative">
    <Image
      className="bg-cover w-screen"
      src='/homefoto.jpeg'
      alt='Foto Principal da Home'
      width={1000}
      height={500}
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-0 right-0 p-4 z-10">
        <h2 className="text-white text-3xl text-center max-w-[400px] mt-12 mr-36 shadow-md">
        Uma doação é uma ação poderosa que pode fazer uma grande diferença em uma ONG que cuida de crianças. Ao contribuir financeiramente, você está oferecendo suporte direto para a missão da organização, que pode abranger uma ampla gama de serviços e benefícios para as crianças em necessidade.
        </h2>
      </div>
        </div>
</section>

    </>
  )
}