import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const List = styled.section`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function MessageList({ messages, loading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <List>
      {messages.map((msg) => (
        <Message key={msg.id} type={msg.type} text={msg.text} />
      ))}
      {loading && <TypingIndicator />}
      <div ref={endRef} />
    </List>
  );
}
