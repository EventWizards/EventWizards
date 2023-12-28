const {knex}  = require('../db/db');

class User {
  async createUser( first_name,last_name, email, password) {
    
    try {
      const result = await knex('Users').insert({ first_name,last_name, email, password }).returning('*');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const result = await knex('Users').select('*').where({ isDeleted: false });
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getUsersbyid(user_Id) {
    try {
      const result = await knex('Users').select('*').where({ isDeleted: false , user_id:user_Id});
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(user_id) {
    try {
      const result = await knex('Users')
        .where({ user_id })
        .update({ isDeleted: true })
        .returning('*');

      if (result.length === 0) {
        return null;
      }

      return result[0];
    } catch (error) {
      throw error;
    }
  }
  async activeUser(user_id) {
    try {
      const result = await knex('Users').select('*').where({ user_id:user_id});
     
      if (result[0].active === true) {
        const result2 = await knex('Users')
        .where({ user_id })
        .update({ active: false })
        .returning('active');

      if (result2.length === 0) {
        return null;
      }
      
      return result2[0];
      }
      else{
        const result2 = await knex('Users')
        .where({ user_id })
        .update({ active: true })
        .returning('active');

      if (result2.length === 0) {
        return null;
      }
      return result2[0];
      }
      

      
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email) {
    try {
      const result = await knex('Users').select('*').where({ email }).first();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async loginadmin(email) {
    try {
      const result = await knex('Users').select('*').where({ email ,rule_id:1}).first();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async updateUser(user_id,first_name,last_name, email, password ,iban,user_image,city,phone,zip) {
    try {
      const result = await knex('Users')
        .where({ user_id })
        .update({first_name,last_name, email, password,iban,user_image,city,phone: knex.raw('COALESCE(?, phone)', [phone]),zip: knex.raw('COALESCE(?, zip)', [zip])})
        .returning('*');
console.log(result.length,"asdasdasd");
      if (result.length === 0) {
        return null;
      }

      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new User();
