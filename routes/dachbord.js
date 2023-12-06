const express = require('express');
const router = express.Router();
const jwt=require('../middleware/jwtaoth')



const userRoutes = require('./users_route');
const event_route = require('./event_route');
const contact_route = require('./contact_route');
const category_route = require('./category_route');
const commints_route = require('./commints_route');
const favourite_route = require('./favourite_route');
const payment_route = require('./paymentroute');





router.use('/users',jwt.authorize(1),userRoutes);
router.use('/event',jwt.authorize(1),event_route);
router.use('/contact',jwt.authorize(1),contact_route);
router.use('/category',jwt.authorize(1),category_route);
router.use('/commints',jwt.authorize(1),commints_route);
router.use('/favourite',jwt.authorize(1),favourite_route);
router.use('/pay',jwt.authorize(1),payment_route);





module.exports = router;