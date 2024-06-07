const { Pet } = require('../models');

exports.getAllPets = async () => {
    return await Pet.findAll();
};

exports.createPet = async (data) => {
    return await Pet.create(data);
};