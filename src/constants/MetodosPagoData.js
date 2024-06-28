const currentDate = new Date().toLocaleDateString('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

export const features = [
    {
      id: "feature-1",
      icon: 'https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/bank.png',
      title: "Transferencia Bancaria Internacional",
      path: '/payment/bank',
      content:
        "Pago realizado a través de la Agencia y Cuenta Bancaria",
    },
    {
      id: "feature-2",
      icon: 'https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/creditcard.png',
      title: "Tarjeta de Credito",
      path: '/payment/card',
      content:
        "Pago realizado a través de los datos de las tarjetas bancarias",
    },
    {
      id: "feature-3",
      icon: 'https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/pix.png',
      title: "PIX",
      path: '/payment/pix',
      content:
        "Pago de uso único en Brazil a través del popular método de transferencia PIX", 
    },
    {
      id: "feature-4",
      icon: 'https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/cuba.png',
      title: "Transferencia Bancaria en Cuba",
      path: '/payment/cuba',
      content:
        "Pago entre cuentas bancarias en Cuba a través de número de tarjeta y el número teléfonico para confirmar",
    },
  ];

  export const pixData = {
      id: "pix_image",
      title: "Información Pix",
      imgUrl: "https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/pixsantander.jpg",
      date: `${currentDate}`,
      description: 'Si desea hacer el PIX via QR solo debe acceder a su aplicacion bancaria y escanear el codigo mostrado. Debajo podrá encontrar tambien la Llave PIX en caso que desee hacer una transferencia manual.',
      llavePix: "eurekaalfa3@gmail.com",
      propietario: "Frank Ernesto Acosta Rodriguez"
    }

  export const bancoData = {
      id: "banco_data",
      title: "Información Bancaria",
      date: `${currentDate}`,
      description: 'Para realizar la transferencia bancaria, a continuación te muestro el número de cuenta necesario, el código de la agencia bancaria y los datos personales.',
      agencia: "2984",
      cuenta: "03067241-6",
      propietario: "Frank Ernesto Acosta Rodriguez"
    }

    export const cubaDataMlc = {
        id: "cuba_data_mlc",
        title: "Información Tarjeta Moneda Libremente Convertible(MLC)",
        imgUrl: "https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/mamaMLC.jpg",
        date: `${currentDate}`,
        description: 'Si desea hacer la transferencia via QR solo debe acceder a su aplicacion bancaria y escanear el codigo mostrado. Debajo podrá encontrar también el número de la tarjeta en caso que desee hacer una transferencia manual.',
        tarjeta: "9235-0699-9054-1255",
        numeroConfirmacion: "+53 59569350",
        propietario: "Graciela Rodriguez Santana"
      }

  export const cubaDataCup = {
      id: "cuba_data_cup",
      title: "Información Tarjeta Moneda Nacional(CUP)",
      imgUrl: "https://eurekae.s3.us-east-2.amazonaws.com/pagos-pagina-web/mamaCup.jpg",
      date: `${currentDate}`,
      description: 'Si desea hacer la transferencia via QR solo debe acceder a su aplicacion bancaria y escanear el codigo mostrado. Debajo podrá encontrar también el número de la tarjeta en caso que desee hacer una transferencia manual.',
      tarjeta: "9204069996047817",
      numeroConfirmacion: "+53 59569350",
      propietario: "Graciela Rodriguez Santana"
    }