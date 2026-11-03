require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  gemini: {
    apiKey: process.env.API_KEY_GEMINI,
    url: 'https://generativelanguage.googleapis.com/v1beta/interactions',
    model: 'gemini-flash-lite-latest',
    apiRevision: '2026-05-20',
    timeoutMs: 25000
  }
};
