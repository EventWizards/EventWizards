const express = require('express');
const eventController = require('../Controllers/eventController');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/jwtaoth');

// Initialize Firebase Admin SDK
const admin = require("firebase-admin");
const serviceAccount = require('../fb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const storage = multer.memoryStorage(); // Use memory storage for Firebase
const upload = multer({ storage: storage });

router.get('/getevents', eventController.getAllEvents);
router.get('/getEventsbycategory', eventController.getEventsbycategory);
router.get('/event', eventController.getEventById);

router.post('/add', auth.authorize([1,2]), upload.fields([
  { name: 'image_url' },
  { name: 'image_id' },
]), async (req, res) => {
  try {
    const a = [...req.files.image_id, ...req.files.image_url]

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

       // Log URL inside the loop
      return url;
    });

    const uploadedImages = await Promise.all(uploadPromises);
    // Add your logic to save the image URLs to the database or perform other actions
    req.body.imageUrls = uploadedImages;

    await eventController.createEvent(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/update', auth.authorize([2, 1]), upload.fields([
  { name: 'image_url' },
  { name: 'image_id' },
]), async (req, res) => {
  try {
    if (!req.files || (!req.files.image_id && !req.files.image_url)) {
      console.log('No images in the request');
      await eventController.updateEvent(req, res);
      return;
    }

    // Handle single image for 'image_url'
    const imageUrl = req.files.image_url;
    if (imageUrl) {
      const image = imageUrl[0];
      const bucket = admin.storage().bucket('gs://localevent-2c6b6.appspot.com');
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileName = image.fieldname + '-' + uniqueSuffix + path.extname(image.originalname);
      const file = bucket.file(fileName);

      const options = {
        destination: fileName,
        metadata: { contentType: image.mimetype, cacheControl: 'public, max-age=31536000' },
      };

      await file.save(image.buffer, options);

      const [url] = await file.getSignedUrl({ action: 'read', expires: '03-09-2491' });

      req.body.imageUrls = { image_url: url };
      await eventController.updateEvent(req, res);
      return;
    }

    // Handle 'image_id' or multiple images for 'image_url'
    const images = req.files.image_url || req.files.image_id;
    const uploadPromises = images.map(async (image) => {
      const bucket = admin.storage().bucket('gs://localevent-2c6b6.appspot.com');
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileName = image.fieldname + '-' + uniqueSuffix + path.extname(image.originalname);
      const file = bucket.file(fileName);

      const options = {
        destination: fileName,
        metadata: { contentType: image.mimetype, cacheControl: 'public, max-age=31536000' },
      };

      await file.save(image.buffer, options);

      const [url] = await file.getSignedUrl({ action: 'read', expires: '03-09-2491' });

      return url;
    });

    const uploadedImages = await Promise.all(uploadPromises);
    const [image_url] = uploadedImages;
    req.body.imageUrls = { image_url };

    await eventController.updateEvent(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/delete', eventController.deleteEvent);
router.put('/accept', eventController.acceptEvent);
router.put('/up', eventController.updateEvent);

module.exports = router;
