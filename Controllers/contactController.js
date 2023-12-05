const ContactUsModel = require('../Models/contactModel');
const nodemailer = require('nodemailer');

class ContactUsController {
  async getAllContacts(req, res) {
    try {
      const contacts = await ContactUsModel.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async createContact(req, res) {
    

    const { name, email, message } = req.body;
    
    try {
      const newContact = await ContactUsModel.createContact(name, email, message);
      const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user:"lith4ever@gmail.com", 
          pass:"rrjoiqoddmcstgrv" 
        },
      });
      
      
      await transporter.sendMail({
        from: 'localevent@event.com', 
        to: [email],
        subject: 'New Contact Form Submission',
        text: "hello",
      });

      res.status(201).json(newContact);
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new ContactUsController();
