const User = require('../Models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
require('dotenv').config();

class UserController {
  // async createUser(req, res) {
  //   try {
  //     const { user_name, email, password } = req.body;

  //     const hashedPassword = await bcrypt.hash(password, 10);

  //     const newUser = await User.createUser(user_name, email, hashedPassword);

   
  //     const token = jwt.sign({ userId: newUser.user_id, email: newUser.email ,rule_id:newUser.rule_id}, process.env.secretKey, {
  //       expiresIn: '1h',
  //     });

  //     res.status(200).json({ user_id: newUser.user_id, token });
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     res.status(500).json('Internal Server Error');
  //   }
  // }
  async createUser(req, res) {
    const { first_name, last_name, email, password } = req.body;
  
    // Validate request body
    const schema = Joi.object({
      first_name: Joi.string().min(3).max(25).required(),
      last_name: Joi.string().min(3).max(25).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{8,12}$')).required(),
    });
  
    const validate = schema.validate({ first_name, last_name, email, password });
  
    // Return validation error response if validation fails
    if (validate.error) {
      return res.status(400).json({ error: validate.error.details });
    }
  
    try {
      console.log(req.body);
  
      // Check if the email already exists
      const existingUser = await User.loginUser(email);
  
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = await User.createUser(first_name, last_name, email, hashedPassword);
  
      // Generate a JWT token
      const token = jwt.sign(
        { user_Id: newUser.user_id, first_name, last_name, email, rule_id: newUser.rule_id },
        process.env.secretKey,
        {
          expiresIn: '1h',
        }
      );
  
      // Respond with user_id and token
      res.status(200).json({ user_id: newUser.user_id, token });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json('Internal Server Error');
    }
  }
  

  async updateUser(req, res) {
    try {
      const user_Id = req.user.user_Id;  
      const { first_name,last_name, email, password ,iban ,city,phone,zip} = req.body;
      const {user_image}= req.body.imageUrls||{};
      console.log(req.body.imageUrls);
      let hashedPassword;
  
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }
  
      const user = await User.updateUser(user_Id, first_name,last_name, email, hashedPassword,iban,user_image,city,phone,zip);
  
      if (user===null) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  
  

  async deleteUser(req, res) {
    try {
      const user_id = req.query.id;

      const user = await User.deleteUser(user_id);

      if (user===null) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error soft deleting user:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  async activeUser(req, res) {
    try {
      const user_id = req.query.id;

      const user = await User.activeUser(user_id);

      if (user===null) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ message: 'User update Active stutes' ,user});
    } catch (error) {
      console.error('Error  user:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await User.loginUser(email);
 
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const storedHashedPassword = user.password;
  
      const passwordMatch = await bcrypt.compare(password, storedHashedPassword);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      
      const token = jwt.sign(
        { user_Id:user.user_id,first_name: user.first_name,last_name:user.last_name, email: user.email, rule_id: user.rule_id },
        process.env.secretKey,
        {
          expiresIn: '500h',
        }
      );
  
      res.json({ token, user_id: user.user_id, ruleid: user.rule_id });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  async loginadmin(req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await User.loginadmin(email);
 
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentialsssssss' });
      }
  
      const storedHashedPassword = user.password;
  
      const passwordMatch = await bcrypt.compare(password, storedHashedPassword);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      
      const token = jwt.sign(
        { user_Id:user.user_id,first_name: user.first_name,last_name:user.last_name, email: user.email, rule_id: user.rule_id },
        process.env.secretKey,
        {
          expiresIn: '500h',
        }
      );
  
      res.json({ token, user_id: user.user_id, ruleid: user.rule_id });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  
  async getAllUsers(req, res) {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Error getting all users:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getUserbyid(req, res) {
    try {
      const user_id=req.user.user_Id
      console.log(user_id);
      const users = await User.getUsersbyid(user_id);
      res.json(users);
    } catch (error) {
      console.error('Error getting all users:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new UserController();
