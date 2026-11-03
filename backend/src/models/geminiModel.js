const { gemini } = require('../config/env');

class GeminiError extends Error {
  constructor(message, status = 502) {
    super(message);
    this.status = status;
  }
}

function extractText(data) {
  return data?.output_text
    || data?.steps
      ?.filter((step) => step.type === 'model_output')
      .flatMap((step) => step.content || [])
      .map((part) => part.text || '')
      .join('')
    || data?.outputs
      ?.filter((output) => output.type === 'text')
      .map((output) => output.text || '')
      .join('');
}

async function sendMessage(message) {
  if (!gemini.apiKey) {
    throw new GeminiError('API_KEY_GEMINI não configurada', 500);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), gemini.timeoutMs);

  try {
    const response = await fetch(gemini.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': gemini.apiKey,
        'Api-Revision': gemini.apiRevision
      },
      body: JSON.stringify({ model: gemini.model, input: message }),
      signal: controller.signal
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new GeminiError(errorData?.error?.message || `A API Gemini respondeu com status ${response.status}`);
    }

    const data = await response.json();
    const reply = extractText(data);

    if (!reply) {
      throw new GeminiError('A API não retornou texto na resposta');
    }

    return { reply, data };
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new GeminiError('Tempo esgotado ao aguardar resposta do Gemini', 504);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

module.exports = { sendMessage, GeminiError };
