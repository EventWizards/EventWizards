const {pool} = require('../db/db');

class paymentModel {
    async getAllcity() {
      const result = await pool.query('SELECT id, name, image  FROM public.citys;');
      return result.rows;
    }
}
module.exports = new paymentModel();