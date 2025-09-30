const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user.model');
const Pet = require('../models/pet.model');
const { generateUsers } = require('../modules/mocking.module');

// ✅ GET /mockingpets
router.get('/mockingpets', async (req, res) => {
  console.log('readyState (mockingpets):', mongoose.connection.readyState);
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    console.error('Erro em /mockingpets:', err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET /mockingusers (gera 50 usuários mockados, não salva no banco)
router.get('/mockingusers', async (req, res) => {
  console.log('readyState (mockingusers):', mongoose.connection.readyState);
  try {
    const users = await generateUsers(50);
    res.json(users);
  } catch (err) {
    console.error('Erro em /mockingusers:', err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST /generateData (gera e insere no banco)
router.post('/generateData', async (req, res) => {
  console.log('readyState (generateData):', mongoose.connection.readyState);
  console.log('Body recebido:', req.body);

  const { users: usersCount = 0, pets: petsCount = 0 } = req.body;

  try {
    if (usersCount > 0) {
      const users = await generateUsers(usersCount);
      await User.insertMany(users);
      console.log(`${usersCount} usuários inseridos no banco.`);
    }

    if (petsCount > 0) {
      const pets = [];
      for (let i = 1; i <= petsCount; i++) {
        pets.push({ name: `Pet${i}`, type: 'dog' });
      }
      await Pet.insertMany(pets);
      console.log(`${petsCount} pets inseridos no banco.`);
    }

    res.json({ message: 'Dados gerados com sucesso!' });
  } catch (error) {
    console.error('Erro em /generateData:', error);
    res.status(500).json({ message: 'Erro ao gerar dados', error: error.message });
  }
});

// ✅ GET todos os usuários salvos no MongoDB
router.get('/users', async (req, res) => {
  console.log('readyState (users):', mongoose.connection.readyState);
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Erro em /users:', err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET todos os pets salvos no MongoDB
router.get('/pets', async (req, res) => {
  console.log('readyState (pets):', mongoose.connection.readyState);
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    console.error('Erro em /pets:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
