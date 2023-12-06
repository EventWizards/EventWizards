const {pool} = require('../db/db');

class paymentModel {
  async getAllpayment() {
    const result = await pool.query('SELECT * FROM public."payment";');
    return result.rows;
  }


  async getpaymentById(Id) {
    const result = await pool.query('SELECT *, public."Events".event_name,public.payment.id, public."Events".date, (public."Events".price*public.payment.amount) as total,public.payment.amount,public."Events".image_url , public."Events".location_url , public."Events".speaker FROM public.payment JOIN public."Events" ON public.payment.event_id = public."Events".event_id  JOIN public."Users" ON public.payment.user_id = public."Users".user_id  where public."payment".id =$1', [Id]);
    return result.rows[0];
  }
  async gettikiet(user_id) {
    const result = await pool.query('SELECT *, public."Events".event_name,public.payment.id, public."Events".date, public."Events".image_url , public."Events".location_url , public."Events".speaker FROM public.payment JOIN public."Events" ON public.payment.event_id = public."Events".event_id  JOIN public."Users" ON public.payment.user_id = public."Users".user_id  where public."payment".user_id =$1 and public."payment".payment_status=true ;', [user_id]);
    return result.rows;
  }


async getemail(event_id) {
    const result = await pool.query('SELECT  public."Users".email  FROM public.payment JOIN public."Events" ON public.payment.event_id = public."Events".event_id JOIN public."Users" ON public.payment.user_id = public."Users".user_id  WHERE public."Events".event_id = $1 and payment_status=true   ;', [event_id]);
    return result.rows;
  }
  async createpayment(user_id, payment_status, amount , payment_date) {
    const result = await pool.query(
      ' INSERT INTO public.payment(user_id, event_id, amount, payment_date)VALUES ( $1,  $2,  $3,  $4) RETURNING *;',
      [ user_id,  payment_status, amount , payment_date]
    );
    return result.rows[0];
  }
  

  async updatepayment(id)  {
    const result = await pool.query(
      'UPDATE public.payment SET  payment_status=true WHERE id=$1 RETURNING *;',
      [id]
    );
    return result.rows[0];
  }
  


}

module.exports = new paymentModel();
