
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style.css";

const stripePromise = loadStripe(
  "pk_test_51OH5EWCYMi4UGQijzFJTPDGifOFe6UUyz8ISB1FLW4eNHtAfAI97kooFEKLqTk4j3vlukcA1NJAiwBQJ8GFdtP9Y00SPlFQ1Z7"
);

const Payment = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/pay/payments/${id}`
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
 <div className="flex flex-col justify-center items-center mt-10">
      <div data-aos="fade-right" data-aos-duration="7000" className=" flex flex-col max-w-md p-6 bg-white w-full border border-solid rounded-lg shadow-md">
        <img
          className="w-full h-34 mb-4"
          src={productData.image_url}
          alt={productData.name}
        />
        <div className="text-left">
          <h3 className="text-xl mt-2 ml-2 font-semibold mb-2">
          Event : {productData.event_name}
          </h3>
          <p className="text-left  ml-2 text-gray-600 mt-2">{productData.description}</p>
          <p className=" text-left  ml-2 text-gray-800 mt-4 font-semibold mb-2">Total :{productData.total}$</p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="7000" className="product max-w-xl  bg-white rounded-lg shadow-md ml-4">
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ stripe, elements }) => (
              <CheckoutForm
                stripe={stripe}
                elements={elements}
                productData={productData}
              />
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
    </>
  );
};

export default Payment;
