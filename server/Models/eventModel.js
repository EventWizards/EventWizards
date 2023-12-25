const {pool} = require('../db/db');

class EventModel {
  async getAllEvents() {
    const result = await pool.query('SELECT * FROM public."Events" WHERE "isDeleted" = false AND "event_status" = true ORDER BY public."Events".event_id desc LIMIT 4;');

    return result.rows;
  }
  async getEvents() {
    const result = await pool.query('SELECT * FROM public."Events" WHERE "isDeleted" = false AND "event_status" = true ORDER BY public."Events".event_id LIMIT 8;');

    return result.rows;
  }
  async getAllEventsdb() {
    const result = await pool.query('SELECT * FROM public."Events" WHERE "isDeleted"=false;');
    return result.rows;
  }
  async getAllUserEvents(user_id) {
    const result = await pool.query('SELECT * FROM public."Events" WHERE "isDeleted"=false and event_status=true and user_id=$1;',[user_id]);
    return result.rows;
  }
  async getEventsbycategory(category_id) {
    const result = await pool.query('SELECT * FROM public."Events" WHERE "isDeleted"=false And category_id=$1 ;',[category_id]);
    return result.rows;
  }

  async getEventById(event_id) {
    const result = await pool.query('SELECT * FROM public."Events" WHERE event_id = $1 and "isDeleted"=false;', [event_id]);
    return result.rows[0];
  }

  async createEvent(event_name, speaker, location, date, tickets, price,  location_url,image_url,image_id,direction,user_id,category_id) {
    const result = await pool.query(
      'INSERT INTO public."Events" (event_name, speaker, location, date, tickets, price,location_url,image_url,image_id,direction,user_id,category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10,$11,$12) RETURNING *;',
      [event_name, speaker, location, date, tickets, price,  location_url,image_url,image_id,direction,user_id,category_id]
    );
    return result.rows[0];
  }
  

  async updateEvent(event_id, event_name, speaker, location, date, tickets, price, location_url, image_url, image_id, direction, user_id) {
    const result = await pool.query(
      'UPDATE public."Events" SET event_name = COALESCE($2, event_name), speaker = COALESCE($3, speaker), location = COALESCE($4, location), date = COALESCE($5, date), tickets = COALESCE($6, tickets), price = COALESCE($7, price), location_url = COALESCE($8, location_url), image_url = COALESCE($9, image_url), image_id = COALESCE($10, image_id), direction = COALESCE($11, direction), user_id = COALESCE($12, user_id) WHERE event_id = $1 ;',
      [event_id, event_name, speaker, location, date, tickets, price, location_url, image_url, image_id, direction, user_id]
    );
    return result.rows[0];
  }
  async updateticket(event_id, number) {
    const result = await pool.query(
      'UPDATE public."Events" SET tickets =(tickets-$2) WHERE event_id = $1 ;',
      [event_id,number]
    );
    return result.rows[0];
  }
  
  async acceptEvent(event_id) {
    const result = await pool.query('SELECT event_status FROM public."Events" WHERE event_id = $1 and "isDeleted"=false;', [event_id]);
    
    if (result.rows[0].event_status === true) {
      const result2 = await pool.query(
        'UPDATE public."Events" SET event_status=false WHERE event_id = $1 RETURNING event_status;',
        [event_id]
      );
      return result2.rows[0];
    }else{
      const result2 = await pool.query(
        'UPDATE public."Events" SET event_status=true WHERE event_id = $1 RETURNING event_status;',
        [event_id]
      );
      return result2.rows[0];
    }
    
  }

  async deleteEvent(event_id) {
    const result = await pool.query('UPDATE public."Events" SET "isDeleted"=true  WHERE event_id = $1 RETURNING *;', [event_id]);
    return result.rows[0];
  }
}

module.exports = new EventModel();
