import React from 'react'
import Container from "components/Container/Container.js";
import PaymentHistory from "components/Table/PaymentHistory.js";

function Payments({ payments }) {
   const paymentsData = payments.data
   return (
      <Container>
         <PaymentHistory data={paymentsData} />
      </Container>
   )
}

export default Payments

export async function getStaticProps() {
   const payments_res = await fetch('https://eth.nanopool.org/api/v1/payments/0x5a7ad5c896d77e3ba4af0de014f8b34fa248f45a')
   const payments = await payments_res.json()

   return {
      props: {
         payments,
      },
   }
}