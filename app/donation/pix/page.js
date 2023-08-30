'use client'

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function PixPayment() {
  const [donationAmount, setDonationAmount] = useState(0); // Inicialize o estado com 0

  // Função para atualizar o valor de doação
  const handleDonationChange = (event) => {
    const inputValue = event.target.value;
    setDonationAmount(parseFloat(inputValue)); // Atualiza o valor
  };

  // Dados para gerar o QR Code
  const pixData = {
    chavePix: 'testeteste', // Sem chave PIX (deixe em branco)
    valor: donationAmount,
    descricao: 'Doação para a ONG',
  };

  // Gera o texto do pagamento PIX
  const pixPaymentText = `
    Passo a Passo para Pagamento via PIX:

    1. Abra o aplicativo do seu banco.
    2. Selecione a opção "PIX" ou "Pagar com PIX".
    3. Escaneie o QR Code abaixo ou insira a chave PIX: ${pixData.chavePix}
    4. Verifique os detalhes da transação.
    5. Confirme o pagamento.

  `;

  return (
    <div className="bg-red-500 text-white p-4">
      <h2>Forma de Pagamento: PIX</h2>
     
      <p>{pixPaymentText}</p>
      <div className="mt-4">
        {/* Renderiza o QR Code */}
        <QRCode value={JSON.stringify(pixData)} size={128} />
      </div>
    </div>
  );
}

export default PixPayment;
