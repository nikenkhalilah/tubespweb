const Users = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password Tidak Cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name,
            email,
            password: hashPassword
        });
        res.json({ msg: "Register Berhasil!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        if (user.length === 0) return res.status(404).json({ msg: "Email Tidak Ditemukan!" });

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (user.length === 0) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

const lihatProfil = async (req, res) => {
    try {
        // Ambil data pengguna dari tabel users
        const user = await Users.findOne({
            where: { id: req.params.userId }, // Atau gunakan sesuai dengan kebutuhan, misalnya berdasarkan email
            attributes: ['name', 'email']
        });

        // Pastikan pengguna ditemukan
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Kirim data pengguna ke view
        res.render('profile', { userName: user.name, userEmail: user.email });
    } catch (error) {
        console.error("Error during profile viewing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { lihatProfil };