const express = require('express');
const cityController = require('../Controllers/citycontroller');

const router = express.Router();


router.get('/getall', cityController.getAllcity);



module.exports = router;
