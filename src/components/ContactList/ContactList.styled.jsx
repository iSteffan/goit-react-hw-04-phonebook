import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: #039be5;
  outline: 1px solid gray;
`;

export const Btn = styled.button`
  height: 40px;
  padding: 5px;
  background-color: yellow;
  border-radius: 6px;
`;

export const Contact = styled.p`
  color: white;
  font-weight: 500;
`;
