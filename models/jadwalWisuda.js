const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

class JadwalWisuda extends Model {
    static associate(models) {
    }
}

JadwalWisuda.init({
    id_jadwal: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    periode: {
        type: DataTypes.STRING
    },
    tanggal_wisuda: {
        type: DataTypes.STRING
    },
    lokasi: {
        type: DataTypes.STRING
    },
    waktu: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'jadwalWisuda',
    tableName: 'jadwal_wisuda',
    timestamps: false
});

module.exports = JadwalWisuda;
