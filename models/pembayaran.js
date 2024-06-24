const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

class Pembayaran extends Model {
    static associate(models) {
    }
}

Pembayaran.init({
    id_pembayaran: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_pendaftaran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bukti_pembayaran: {
        type: DataTypes.BLOB('medium'),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'pembayaran',
    tableName: 'pembayaran',
    timestamps: false
});

module.exports = Pembayaran;
