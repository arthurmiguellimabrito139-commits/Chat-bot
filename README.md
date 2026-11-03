# Chat Bot

Chat com inteligência artificial usando a API do **Google Gemini**, com backend em Node.js/Express (arquitetura MVC) e frontend em React com styled-components.

## Tecnologias

**Backend:** Node.js, Express 5, dotenv, cors, nodemon
**Frontend:** React 19, styled-components, Vite

## Estrutura

```
chat_bot/
├── backend/
│   ├── app.js                       # ponto de entrada (inicia o servidor)
│   └── src/
│       ├── app.js                   # configuração do Express e rotas
│       ├── config/env.js            # variáveis de ambiente e config do Gemini
│       ├── routes/chatRoutes.js     # definição das rotas
│       ├── controllers/chatController.js  # validação e resposta HTTP
│       └── models/geminiModel.js    # comunicação com a API do Gemini
└── frontend/
    └── src/
        ├── App.jsx                  # estado do chat
        ├── components/              # ChatHeader, MessageList, Message, TypingIndicator, ChatInput
        ├── services/chatService.js  # chamada à API do backend
        └── styles/                  # tema e estilos globais
```

## Pré-requisitos

- Node.js 18 ou superior
- Uma chave da API do Gemini ([Google AI Studio](https://aistudio.google.com/apikey))

## Instalação

```bash
git clone https://github.com/arthurmiguellimabrito139-commits/Chat-bot.git
cd Chat-bot

cd backend
npm install

cd ../frontend
npm install
```

Crie o arquivo `backend/.env` a partir do exemplo:

```bash
cp backend/.env.example backend/.env
```

E preencha com a sua chave:

```env
API_KEY_GEMINI=sua_chave_aqui
PORT=3000
```

## Como rodar

### Desenvolvimento

Em dois terminais:

```bash
# terminal 1
cd backend
npm run dev

# terminal 2
cd frontend
npm run dev
```

Acesse **http://localhost:5173**. O Vite redireciona as chamadas `/chat` para o backend.

### Produção

```bash
cd frontend
npm run build

cd ../backend
npm start
```

Acesse **http://localhost:3000**. O backend serve o build do React.

## API

### `POST /chat`

Envia uma mensagem para a IA.

**Body:**
```json
{ "message": "Olá!" }
```

**Resposta (200):**
```json
{ "reply": "Olá! Como posso te ajudar?", "data": { } }
```

**Erros:**

| Status | Motivo |
| ------ | ------ |
| 400 | Mensagem vazia |
| 500 | `API_KEY_GEMINI` não configurada |
| 502 | Erro retornado pela API do Gemini |
| 504 | Tempo esgotado (25s) aguardando o Gemini |

### `GET /health`

Verifica se o servidor está no ar. Retorna `{ "status": "ok" }`.
