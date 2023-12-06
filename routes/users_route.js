const { Router } = require('express');
const userController = require('../Controllers/userController');
const router = Router();
const jwt = require('../middleware/jwtaoth');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/jwtaoth'); // If not used, you can remove this line

const admin = require('firebase-admin');
const serviceAccount = require('../fb.json');




const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/addusers', userController.createUser);
 
router.put('/delete', userController.deleteUser);
router.get('/getuserid', auth.authorize([2,1]),userController.getUserbyid);
router.get('/getall', userController.getAllUsers);
router.post('/login', userController.loginUser);
router.put('/update', auth.authorize([2,1]),upload.fields([
    { name: 'user_image' }
  ]), async (req, res) => {
    try {
      if (!req.files ||!req.files.user_image || req.files.user_image.length === 0) {
      
      console.log('No images in the request');
    
      await userController.updateUser(req, res);
      return;
    }
      const a = [...req.files.user_image]
  
      const images = a;
      const uploadPromises = images.map(async (image) => {
        const bucket = admin.storage().bucket('gs://localevent-2c6b6.appspot.com');
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = image.fieldname + '-' + uniqueSuffix + path.extname(image.originalname);
        const file = bucket.file(fileName);
  
        // Set the file to be publicly accessible
        const options = {
          destination: fileName,
          metadata: { contentType: image.mimetype, cacheControl: 'public, max-age=31536000' }, // max-age set for one year
        };
  
        await file.save(image.buffer, options);
  
        // Get the download URL for the saved image
        const [url] = await file.getSignedUrl({ action: 'read', expires: '03-09-2491' });
  
         
        return url;
      });
  
      const uploadedImages = await Promise.all(uploadPromises);
      // Add your logic to save the image URLs to the database or perform other actions
      [user_image]=uploadedImages
      req.body.imageUrls = {user_image};

  
      await userController.updateUser(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
