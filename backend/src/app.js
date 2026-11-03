const path = require('path');
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// View: build do frontend React (gerado com `npm run build` na pasta frontend)
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use(chatRoutes);

module.exports = app;
