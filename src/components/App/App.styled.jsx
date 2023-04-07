import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 300px;
`;

export const PrimaryTitle = styled.h1`
  margin-bottom: 12px;
`;

export const SecondaryTitle = styled.h2`
  margin-bottom: 12px;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBg};
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
