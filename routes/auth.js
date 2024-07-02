const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) return res.status(400).json({ message: 'Usuario ya registrado' });

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const validPass = req.body.password === user.password;
        if (!validPass) return res.status(400).json({ message: 'Contraseña incorrecta' });

        res.json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

// Ruta para obtener todos los usuarios
router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router;
