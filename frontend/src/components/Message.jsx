import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; }
`;

const variants = {
  user: css`
    align-self: flex-end;
    background: ${({ theme }) => theme.colors.accent};
    border-bottom-right-radius: 4px;
  `,
  bot: css`
    align-self: flex-start;
    background: ${({ theme }) => theme.colors.bot};
    border-bottom-left-radius: 4px;
  `,
  error: css`
    align-self: flex-start;
    border: 1px solid ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};
  `
};

export const Bubble = styled.div`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius};
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  animation: ${fadeIn} 0.2s ease;
  ${({ $type }) => variants[$type]}
`;

export default function Message({ type, text }) {
  return <Bubble $type={type}>{text}</Bubble>;
}
