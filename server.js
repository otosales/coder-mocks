const express = require('express');
const mongoose = require('./project/db'); // usa sempre o mesmo mongoose

const app = express();
app.use(express.json());

async function start() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mockingdb', {
      serverSelectionTimeoutMS: 5000
    });

    console.log('MongoDB conectado (readyState=' + mongoose.connection.readyState + ')');

    const mocksRouter = require('./project/routes/mocks.router');
    app.use('/api/mocks', mocksRouter);

    const PORT = 3000;
    app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
  } catch (err) {
    console.error('Erro ao conectar no MongoDB:', err);
    process.exit(1);
  }
}

start();
