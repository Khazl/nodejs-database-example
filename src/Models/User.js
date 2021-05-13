const { DataTypes } = require('sequelize');

exports.UserFields = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

exports.UserOptions = {
    timestamps: false
}