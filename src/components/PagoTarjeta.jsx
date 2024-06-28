// import React, { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import styles from '../style';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const PagoTarjeta = () => {
//   const [stripe, setStripe] = useState(null);
//   const stripePromise = loadStripe('pk_live_51P30QY2Lc5m1bZ0AWpoUtT7jTNPIA2IK8LrGMLBT2fmUt66Zl5JB6efPWOTtbC9v4gy0xChvrvzol9fFa3Jgd2Cf007oyHI7ou');

//   useEffect(() => {
//     const initializeStripe = async () => {
//       const stripeInstance = await stripePromise;
//       setStripe(stripeInstance);
//     };

//     initializeStripe();
//   }, [stripePromise]);

//   const handlePago = async () => {
//     if (!stripe) {
//       console.error('Error al cargar Stripe');
//       return;
//     }

//     try {
//       const response = await fetch('/api/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: 1000 }), // Ejemplo: Monto en centavos
//       });

//       const data = await response.json();

//       // Cuando el pago se procesa exitosamente, abre la ventana de pago de Stripe
//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: stripe.elements.getElement('card'),
//           billing_details: {
//             name: 'Nombre del Cliente',
//           },
//         },
//       });

//       if (result.error) {
//         console.error(result.error.message);
//       } else {
//         console.log('Pago exitoso');
//         // Aquí puedes agregar lógica adicional después de un pago exitoso
//       }
//     } catch (error) {
//       console.error('Error al procesar el pago:', error);
//       // Manejar el error adecuadamente en tu aplicación
//     }
//   };

//   return (
//     <div className="bg-primary w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>

//       <div className="flex justify-center items-center h-screen">
//         <button onClick={handlePago} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Pagar con Tarjeta
//         </button>
//       </div>

//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PagoTarjeta;
