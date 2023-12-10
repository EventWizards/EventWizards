import { ElementsConsumer , CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";
import CardSection from "./CardSection";
import axios from "axios";
import { number } from "joi";
function CheckoutForm({stripe, elements,productData}){
//     const stripe = useStripe();

//   const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();



    // const { stripe, elements } = props;
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

const payid=productData.id;
const amount=productData.total;
const number=productData.amount
const event_id = productData.event_id
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    } 
//handle amount
    const { id } = paymentMethod;
    const response = await axios.post(`http://localhost:3001/pay/payment`, {
      amount: amount,
      id,
      payid,
      event_id,
      number
    });

    if (response.data.success) {
      try {
        // setSuccess(true);
        console.log("goooood");
        console.log(payid);
} catch (error) {console.log(error);}
};}

//   render() {
return (
      <div>
       
        <form onSubmit={handleSubmit}>
          <CardSection/>
          <button className="btn-pay">Buy Now</button>
        </form>
      </div>
    );
//   }
}
export default CheckoutForm