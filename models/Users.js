const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Database'); 

class Users extends Model {
    static associate(models) {
    }
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    no_id: {
        type: DataTypes.STRING
    },
    jurusan: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false
});

module.exports = Users;
