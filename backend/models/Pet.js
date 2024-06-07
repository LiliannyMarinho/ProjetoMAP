const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Pet = sequelize.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Pet;