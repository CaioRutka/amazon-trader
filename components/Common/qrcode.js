import React from 'react';
import { useQRCode } from 'next-qrcode';

const depositWallet = "TMmzhMSHTGKt42H8n2dz5oEidKnUHJSC7D";

function QRCode() {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={depositWallet}
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 350,
        color: {
          dark: '#000000',
          light: '#f2f2f2',
        },
      }}
    />
  );
}

export default QRCode;