
import Link from 'next/link'
import Image from 'next/image'
import IsEstOpen from '../hour/page'
export default function Footer() {

  const isOpen = IsEstOpen()

  return (
    <>
      <footer class='flex  flex-wrap bg-slate-300 mt-6'>
  <div className="flex mt-12">

    <div class="ml-12 shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.431845100454!2d-43.25921631649451!3d-22.870851277726107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd88dcb13aa6d6d5%3A0xcba3f5a967431107!2sRua%20Humboldt%20153%2C%20Bonsucesso%2C%20RJ%20-%20LOJA%20VIRTUAL%20ONLINE%2C%20%22BAZAR%20%26%20CIA%20-%20DAVI%20SILVA%22.%20XEROX%2C%20JUKEBOX%20E%20KARAOK%C3%8A.!5e0!3m2!1spt-BR!2sbr!4v1691884795855!5m2!1spt-BR!2sbr"
        width="450"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
    
   
    <div class="border-l border-red-500 ml-6"></div>
    <div>
      <h3 class='ml-6 max-w-sm'>R. Humboldt, 153 - Bonsucesso, Rio de Janeiro - RJ, 21050-140   
        <span class={`mt-8 ml-4 rounded-xl px-4 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
                {isOpen ? 'Aberto' : 'Fechado'}
        </span> 
      </h3>
      <ul class='ml-6 max-w-sm'>
        <li> - SEG: 09:00 - 17:00</li>
        <li> - TER: 09:00 - 17:00</li>
        <li> - QUA: 09:00 - 17:00</li>
        <li> - QUI: 09:00 - 17:00</li>
        <li> - SEX: 10:00 - 16:00</li>
      </ul>
    </div>

    <div class="border-l border-red-500"></div>
    <div class='ml-12 shadow-sm'>
      <Link href=''><Image src='/facebook.png' alt='facebook logo' width={40} height={40} /></Link>
      <Link href=''><Image class='my-2' src='/twitter.png' alt='Twitter logo' width={40} height={40} /></Link>
      <Link href=''><Image src='/instagram.png' alt='Instagram logo' width={40} height={40} /></Link>
    </div>

    <div class=' ml-4'>
      <h3 class='text-red-500'>Informe-se</h3>
      <Link class='' href=''>Nossos Funcionários</Link>
    </div>
  </div>
</footer>   
    </>
  )
}