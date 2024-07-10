import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ada5f9;
  border-radius: 3px;
  border: 1px solid #ada5f9;
  color: #511f31;
  cursor: pointer;
  padding: 10px 10px;
  font-size: clamp(1rem, 1vw, 1.5rem);

  &:hover,
  :focus {
    background-color: #f7f9ff;
    color: #2c5777;
  }
`;
export const NavButton = styled(Link)`
  background-color: #ada5f9;
  border-radius: 3px;
  border: 1px solid #ada5f9;
  color: #511f31;
  cursor: pointer;
  padding: 10px 10px;
  text-align: center;
  margin-left: 20px;
  text-decoration: none;
  font-size: clamp(1rem, 1vw, 1.5rem);
  white-space: nowrap;

  &:hover,
  :focus {
    background-color: #f7f9ff;
    color: #2c5777;
  }
  @media screen and (max-width: 900px) {
    margin: 5px;
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
`;
