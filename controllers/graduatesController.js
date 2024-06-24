const { Op } = require('sequelize');
const Users = require('../models/Users');

exports.searchGraduates = async (req, res) => {
    try {
        const { nama } = req.query;

        const graduates = await Users.findAll({
            where: {
                name: {
                    [Op.like]: `%${nama}%`
                }
            }
        });

        res.render('cariMahasiswa', { graduates });
    } catch (err) {
        console.error('Error searching graduates:', err);
        res.status(500).send('Internal server error');
    }
};
