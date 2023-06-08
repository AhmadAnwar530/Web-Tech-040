// const express = require('express');
// const router = express.Router();
// const SugarLevel = require('../models/sugarlevelModel');


// // GET all sugar levels
// router.get('/sugar-level', async (req, res) => {
//   const sugarlevelGet = await SugarLevel.find().then((sugarlevelGet) => {
//         console.log(sugarlevelGet)
//       res.json(sugarlevelGet);
//     })
//     .catch((error) => {
//       console.error('Error retrieving sugar levels:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     });
// });


// module.exports = router;




const express = require('express');
const router = express.Router();
const SugarLevel = require('../../models/sugarlevelModel');

// GET all sugar levels
router.get('/', async (req, res) => {
  try {
    const sugarLevels = await SugarLevel.find();
    res.json(sugarLevels);
  } catch (error) {
    console.error('Error retrieving sugar levels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// POST a new sugar level
router.post('/', (req, res) => {
  const { reading, mood, type } = req.body;
  const newSugarLevel = new SugarLevel({ reading, mood, type });

  newSugarLevel.save()
    .then((savedSugarLevel) => {
      res.status(201).json(savedSugarLevel);
    })
    .catch((error) => {
      console.error('Error saving sugar level:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});


module.exports = router;
