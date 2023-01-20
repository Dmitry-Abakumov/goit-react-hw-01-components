import styled from '@emotion/styled';

export const Friend = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }

  padding: 5px;

  border: 1px solid black;
  border-radius: 2px;
`;

export const Chip = styled.span`
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
