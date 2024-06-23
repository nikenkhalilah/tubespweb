import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const PendaftaranWisuda = db.define('pendaftaran_wisuda', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggalLahir: {
        type: DataTypes.DATE,
        allowNull: false
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default PendaftaranWisuda;
