const geminiModel = require('../models/geminiModel');

async function chat(req, res) {
  const userMessage = req.body?.message;

  if (!userMessage || !String(userMessage).trim()) {
    return res.status(400).json({ error: 'input vazio' });
  }

  try {
    const { reply, data } = await geminiModel.sendMessage(String(userMessage));
    return res.json({ reply, data });
  } catch (error) {
    console.error('Error ao conversar com a IA:', error.message);
    return res.status(error.status || 502).json({ error: error.message });
  }
}

module.exports = { chat };
