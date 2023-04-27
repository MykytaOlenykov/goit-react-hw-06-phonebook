import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  max-width: 200px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primaryBg};
  border-radius: 4px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14);
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
