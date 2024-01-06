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

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
  transition: color 250ms ease;

  &.active {
    color: #ceff7b;
  }

  &:hover,
  :focus {
    color: #98bf56;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ButtonAdvertisement = styled.button`
  display: flex;
  height: 43px;
  padding: 12px 20px;
  border: none;
  background: #ceff7b;
  border-radius: 30px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  justify-content: center;
  grid-gap: 10px;
  gap: 10px;
  margin-right: 20px;
  transition: background-color 250ms ease;

  &:hover,
  :focus {
    background-color: #98bf56;
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
