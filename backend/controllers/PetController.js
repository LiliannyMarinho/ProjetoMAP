const PetService = require('../services/PetService');

exports.getAllPets = (req, res) => {
  PetService.getAllPets()
    .then(pets => res.json(pets))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createPet = (req, res) => {
  PetService.createPet(req.body)
    .then(pet => res.status(201).json(pet))
    .catch(err => res.status(500).json({ error: err.message }));
};