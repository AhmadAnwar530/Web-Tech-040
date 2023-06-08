const express = require('express');
const multer = require('multer');
const storage = require('./firebaseConfig'); // Import the Firebase configuration

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    const filePath = `images/${file.originalname}`;

    // Upload the file to Firebase Storage
    const snapshot = await storage.ref(filePath).put(file.buffer);

    // Get the download URL of the uploaded file
    const downloadURL = await snapshot.ref.getDownloadURL();

    // Save the downloadURL in MongoDB or use it for rendering in EJS
    // ...
    
    res.send({ imageUrl: downloadURL });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during image upload.');
  }
});

module.exports = router;
