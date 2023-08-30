'use client'

import React, { useState } from 'react';
import VaquinhaPayment from './vaquinha/page';
import PixPayment from './pix/page';
import DepositoPayment from './deposito/page';
import CartaoDebitoPayment from './credito/page';

export default function PaymentPage() {
  const [activePayment, setActivePayment] = useState('');

  const handlePaymentClick = (paymentType) => {
    setActivePayment(paymentType);
  };

  return (
    <div className="flex">
      {/* Botões de navegação na lateral esquerda */}
      <div className="w-1/4 bg-red-500 p-4">
        <button
          className="block w-full p-2 my-2 bg-white text-red-500 hover:bg-red-700 hover:text-white"
          onClick={() => handlePaymentClick('vaquinha')}
        >
          Vaquinha
        </button>
        <button
          className="block w-full p-2 my-2 bg-white text-red-500 hover:bg-red-700 hover:text-white"
          onClick={() => handlePaymentClick('pix')}
        >
          PIX
        </button>
        <button
          className="block w-full p-2 my-2 bg-white text-red-500 hover:bg-red-700 hover:text-white"
          onClick={() => handlePaymentClick('deposito')}
        >
          Depósito
        </button>
        <button
          className="block w-full p-2 my-2 bg-white text-red-500 hover:bg-red-700 hover:text-white"
          onClick={() => handlePaymentClick('cartao-debito')}
        >
          Cartão de Débito
        </button>
      </div>

      {/* Conteúdo central */}
      <div className="w-3/4 p-4">
        {activePayment === 'vaquinha' && <VaquinhaPayment />}
        {activePayment === 'pix' && <PixPayment />}
        {activePayment === 'deposito' && <DepositoPayment />}
        {activePayment === 'cartao-debito' && <CartaoDebitoPayment />}
      </div>
    </div>
  );
}
