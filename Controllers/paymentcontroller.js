// EventController.js

const paymentModel = require('../Models/paymentModel');

async function getAllPayments(req, res) {
  try {
    const payments = await paymentModel.getAllpayment();
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPaymentById(req, res) {
  const  id  = req.params.id;
  try {
    const payment = await paymentModel.getpaymentById(id);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error fetching payment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function gettikiet(req, res) {
  const  user_id  = req.user.user_Id;
  console.log(req.user.user_Id);
  try {
    const payment = await paymentModel.gettikiet(user_id);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error fetching payment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getemail(req, res) {
  const  id  = req.query.id;
  try {
    const payment = await paymentModel.getpaymentById(id);
  
      res.json(payment);
    
      
  
  } catch (error) {
    console.error('Error fetching payment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createPayment(req, res) {
  // const user_id=req.users.id;
  const {  amount ,event_id} = req.body;
  const user_id =req.user.user_Id

  
  const payment_date = new Date().toISOString();
  

  try {
    const newPayment = await paymentModel.createpayment(user_id, event_id, amount, payment_date);
    res.json(newPayment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updatePaymentStatus(req, res) {
  const { id } = req.params;
  try {
    const updatedPayment = await paymentModel.updateEvent(id);
    if (updatedPayment) {
      res.json(updatedPayment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error updating payment status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePaymentStatus,
  getemail,
  gettikiet,
};
