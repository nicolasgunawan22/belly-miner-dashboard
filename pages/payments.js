import React from 'react'
import Container from "components/Container/Container.js";
import PaymentHistory from "components/Table/PaymentHistory.js";
import jsHttpCookie from 'cookie';
import jwt from "jwt-decode";

function Payments({ payments }) {
   const paymentsData = payments.data || 0
   return (
      <Container>
         <PaymentHistory data={paymentsData} />
      </Container>
   )
}

export default Payments

export async function getServerSideProps({ req }) {
   const initProps = {};
   if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === 'string') {
         const cookiesJSON = jsHttpCookie.parse(cookies);
         initProps.token = cookiesJSON.token;
      }
   }

   const userId = jwt(initProps.token)._id

   const user_res = await fetch(`http://localhost:5000/api/user/${userId}`)
   const userData = await user_res.json()
   const walletAddress = userData?.user?.walletAddress

   const payments_res = await fetch(`https://eth.nanopool.org/api/v1/payments/${walletAddress}`)
   const payments = await payments_res.json()

   return {
      props: {
         payments,
      },
   }
}