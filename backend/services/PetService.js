const Pet = require('../models/Pet');

exports.getAllPets = async () => {
    return await Pet.find();
};

exports.createPet = async (data) => {
    const pet = new Pet(data);
    return await pet.save();
};