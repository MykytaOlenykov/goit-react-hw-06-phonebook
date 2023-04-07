import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
  padding: 20px;
  max-width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBg};
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 4px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primaryBg};
  border-radius: 4px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14);

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export const Button = styled.button`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
  transition: background-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
