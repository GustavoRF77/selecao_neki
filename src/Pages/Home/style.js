import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 400px;
  padding-right: 400px;
  flex-direction: row;
`

export const Button = styled.button`
  
  width: 200px;
  height: 80px;
  background-color: #5390d9;
  color: #5390D9;
  margin-left: 100px;
  margin-right: 100px;
  &:hover{
    transition: 0.4s;
    background-color: #fff;
    border-color: #5390d9;
  }
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    transition: 0.4s;
    color: #5390d9;
  }
`