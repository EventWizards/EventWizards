const EventModel = require('../Models/eventModel');
const payment = require('../Models/paymentModel');
const nodemailer = require('nodemailer');

class EventController {
  async getAllEvents(req, res) {
    try {
      const events = await EventModel.getAllEvents();
      res.json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  async getEventsbycategory(req, res) {
    const category_id = req.query.id;
    console.log(category_id);
    try {
      const events = await EventModel.getEventsbycategory(category_id);
      res.json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  async acceptEvent(req, res) {
    const event_id = req.query.id;
    try {
      const events = await EventModel.acceptEvent(event_id);
      res.json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getEventById(req, res) {
    const event_id = req.query.id;
    try {
      const event = await EventModel.getEventById(event_id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      console.error('Error fetching event:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async createEvent(req, res) {
    
  
    try {
      const { event_name, speaker, location, date, tickets, price,  location_url ,direction,category_id} = req.body;
      console.log(req.body);
      
    const user_id=req.user.user_Id
    
      const image_url = req.body.imageUrls[1];
      const image_id = req.body.imageUrls[0];
     
  
      const newEvent = await EventModel.createEvent(event_name, speaker, location, date, tickets, price,location_url,image_url,image_id,direction,user_id,category_id);
  
      res.status(200).json(newEvent);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async updateEvent(req, res) {
    const { event_name, speaker, location, date, tickets, price,  location_url,direction } = req.body;
    
    const user_id=req.user.user_Id
    
    const image_id = null 
     const image_url =req.body.imageUrls
      console.log(image_url);
    const event_Id =req.query.id;

    try {
      const updatedEvent = await EventModel.updateEvent(event_Id,event_name, speaker, location, date, tickets, price,location_url,image_url,image_id,direction,user_id);
      const emails= await payment.getemail(event_Id)
      const arrayOfEmails = emails.map(obj => obj.email);
      console.log(arrayOfEmails);
      if (arrayOfEmails.length===0) {
        console.log("no users uet ");
      }
      else{
        const transporter = nodemailer.createTransport({
          service: 'gmail', // Specify your email service
          auth: {
            user:"lith4ever@gmail.com", // Your email address
            pass:"rrjoiqoddmcstgrv" // Your email password
          },
        });
        
        // Send an email using Nodemailer
        await transporter.sendMail({
          from: 'localevent@event.com', 
          to:arrayOfEmails ,
          subject: 'update on event',
          text: "updated ",
        });
      }
      
      res.json(updatedEvent);
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async deleteEvent(req, res) {
    const event_Id = req.query.id;
    try {
      const deletedEvent = await EventModel.deleteEvent(event_Id);
      if (!deletedEvent) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new EventController();
