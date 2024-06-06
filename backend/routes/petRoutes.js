const express = require('express');
const router = express.Router();
const PetController = require('../controllers/PetController');

router.get('/', PetController.getAllPets);
router.post('/', PetController.createPet);

module.exports = router;