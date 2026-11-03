import styled, { keyframes } from 'styled-components';
import { Bubble } from './Message';

const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-6px); }
`;

const Dots = styled(Bubble)`
  display: flex;
  gap: 4px;
  padding: 14px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.muted};
  border-radius: 50%;
  animation: ${bounce} 1.2s infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export default function TypingIndicator() {
  return (
    <Dots $type="bot">
      <Dot $delay={0} />
      <Dot $delay={0.15} />
      <Dot $delay={0.3} />
    </Dots>
  );
}
