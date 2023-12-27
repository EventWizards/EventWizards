const express = require('express');
const paymentController = require('../Controllers/paymentcontroller');
 const paymentaccept=require('../Models/paymentModel')
 const ticketcount=require('../Models/eventModel')

const auth = require('../middleware/jwtaoth')
const router = express.Router();
const cors = require('cors');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.get('/payments', paymentController.getAllPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.get('/paymentsSamary/:event_id', paymentController.payment_samary);
router.get('/tikite',auth.authorize([1,2]) ,paymentController.gettikiet);
router.get('/tikitebyid',auth.authorize([1,2]) ,paymentController.gettikiet);
router.post('/addpay',auth.authorize([2,1]) ,paymentController.createPayment);
router.put('/pay/:id', paymentController.updatePaymentStatus);

router.post("/payment", cors(), async (req, res) => {
  let { amount, id,payid ,event_id,number} = req.body;
  
  
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Spatula company",
      payment_method: id,
      confirm: true,
      return_url: "http://localhost:3000/",
    });
    console.log("Payment sdasdas", payment);
    const accept= await paymentaccept.updatepayment(payid)
    const ticket= await ticketcount.updateticket(event_id,number)
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

module.exports = router;
