import { useState } from 'react';
import styled from 'styled-components';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import { sendChatMessage } from './services/chatService';

const WELCOME = { id: 0, type: 'bot', text: 'Olá! Como posso te ajudar hoje?' };

const Container = styled.main`
  width: 100%;
  max-width: 760px;
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 800px) {
    border-radius: 0;
    border: none;
    max-height: none;
  }
`;

let nextId = 1;

export default function App() {
  const [messages, setMessages] = useState([WELCOME]);
  const [loading, setLoading] = useState(false);

  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, { id: nextId++, type, text }]);
  };

  const handleSend = async (text) => {
    addMessage('user', text);
    setLoading(true);

    try {
      const reply = await sendChatMessage(text);
      addMessage('bot', reply);
    } catch (error) {
      addMessage('error', `Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ChatHeader loading={loading} onClear={() => setMessages([WELCOME])} />
      <MessageList messages={messages} loading={loading} />
      <ChatInput onSend={handleSend} disabled={loading} />
    </Container>
  );
}
