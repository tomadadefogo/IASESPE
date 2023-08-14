'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';  
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 bg-opacity-50 flex items-center justify-center modal-overlay" onClick={handleOverlayClick}>
          <div className="bg-white p-4 md:p-8 rounded shadow-md max-w-md w-full">
            <div className="relative">
              <Image src='/homefoto.jpeg' alt='Foto do modal' width={300} height={200} layout="responsive" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-black mt-4">Seja um doador</h2>
            <p className="text-black mb-4 text-sm md:text-base">A sua doação pode fazer a diferença, todas as ajudas são sempre direcionadas para as crianças.</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 text-sm md:text-base"
                onClick={closeModal}
              >
                Fechar Modal
              </button>
              <Link className="bg-[#FF6600] hover:bg-[#ff9000] text-white font-semibold py-2 px-4 rounded text-sm md:text-base" href="/doacao">
                  Doação
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
