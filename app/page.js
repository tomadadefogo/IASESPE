'use client'

import Modal from './modal/page'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {

  

  return (
    <>
     <Modal/>
   
    <section id='homeConfig' className='relative mt-12'>
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
<section>
  <h2 class='text-center text-3xl text-white mt-12'>
    Últimas notícias
  </h2>
  <div class='border border-white mt-6 max-w-[400px] mx-auto'></div>
</section>
<section id='fotoConfig' class='mt-12'>
  <div class="flex justify-between mx-12">
    <Link href='' class="relative">
      <Image
        src="/homefoto.jpeg"
        alt="Foto 1"
        width={300}
        height={500}
      />
      <h3 class="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white hover:bg-red-500">
        Evento com parceria da SEBRAE atrai centenas de crianças
      </h3>
    </Link>
    <Link href='' class="relative">
      <Image
        src="/homefoto.jpeg"
        alt="Foto 2"
        width={300}
        height={500}
      />
      <h3 class="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white hover:bg-red-500">
        Evento com parceria da SEBRAE atrai centenas de crianças
      </h3>
    </Link>
    <Link href='' class="relative">
      <Image
        src="/homefoto.jpeg"
        alt="Foto 3"
        width={300}
        height={500}
      />
      <h3 class="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white hover:bg-red-500">
        Evento com parceria da SEBRAE atrai centenas de crianças
      </h3>
    </Link>
  </div>
</section>
<section>
  <div class='flex justify-between mx-12'>
    <div class="w-1/3 relative">
      <div class='border border-white mt-6'></div>
    </div>
    <div class="w-1/3 relative ">
      <div class='border border-white mt-6'></div>
    </div>
    <div class="w-1/3 relative ">
      <div class='border border-white mt-6'></div>
    </div>
  </div>
</section>

</>
)
}