import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 1.05rem;
`;

const Status = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const ClearButton = styled.button`
  margin-left: auto;
  background: transparent;
  color: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.muted};
  }
`;

export default function ChatHeader({ loading, onClear }) {
  return (
    <Header>
      <Avatar>🤖</Avatar>
      <div>
        <Title>Chat Bot</Title>
        <Status>{loading ? 'Digitando...' : 'Online'}</Status>
      </div>
      <ClearButton onClick={onClear} title="Limpar conversa">
        Limpar
      </ClearButton>
    </Header>
  );
}
