import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #283149;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 54px;
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoName = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 100px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
  transition: color 250ms ease, background-color 250ms ease;

  &.active {
    color: #ceff7b;
    &.create {
      color: #fff;
    }
  }

  &.create {
    padding: 12px 20px;
    background-color: #1f7a37;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover,
  :focus {
    color: #98bf56;

    &.create {
      color: #fff;
      background-color: #1b602d;
    }
  }
`;

export const ButtonLanguage = styled.button`
  cursor: pointer;
  display: flex;
  grid-gap: 5px;
  gap: 5px;
  font-size: 0.875rem;
  padding: 12px 20px;
  border: 1px solid #404b69;
  border-radius: 30px;
  color: #fff;
  height: 40px;
  background-color: transparent;
  transition: border 250ms ease;

  &:hover,
  :focus {
    border: 1px solid #98bf56;
  }
`;
