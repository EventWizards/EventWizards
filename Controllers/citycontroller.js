const cityModel = require('../Models/city');

class FavouriteController {
  async getAllcity(req, res) {
   
    try {
        
      const city = await cityModel.getAllcity();
      res.json(city);
    } catch (error) {
      console.error('Error fetching favourites:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  

  
}

module.exports = new FavouriteController();
