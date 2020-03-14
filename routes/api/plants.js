const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const Plant = require('../../models/Plant');


router.get('/api/plants/', (req, res) => {
  Plant.find()
  .sort({date: -1})
  .then(plants => res.json(plants))
})

router.get('/api/plants/:id', (req, res)=> {
  Plant.findById(req.params.id)
  .then(plant => res.json(plants))
});


router.post("/api/plants", auth, (req, res) => {
  const newPlant = new Plant({
    user : req.body.user,
    name: req.body.name,
    plantType: req.body.type,
    waterSchedule: req.body.waterSchedule
  });
  newPlant.save().then(plant => res.json(plant));
});

//PRivate
router.delete('/api/plants/:id', auth, (req, res)=> {
  Plant.findById(req.params.id)
  .then(plant => plant.remove().then(() => res.json({success: true})))
});

module.exports = router;