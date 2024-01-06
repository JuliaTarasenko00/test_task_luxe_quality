import styled from 'styled-components';

export const List = styled.ul``;

export const Item = styled.li`
  max-width: 240px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 5px 1px #efeeee;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  width: 240px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonFavorite = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 10px;
  border: none;
  transition: color 250ms ease;

  &:hover,
  :focus {
    color: red;
  }
`;

export const WrapperDescription = styled.div`
  padding: 12px;
`;

export const Name = styled.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: 1rem;
  margin-bottom: 8px;
`;

export const ModelName = styled.p`
  font-size: 0.875rem;
  color: #404b69;
  margin-bottom: 8px;
`;

export const Rating = styled.p``;

export const MinimalPriceTitle = styled.p`
  margin-top: 8px;
  font-size: 0.75rem;
  color: rgba(64, 75, 105, 0.6);
  opacity: 0.6;
`;

export const MinimalPrice = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  margin-top: 5px;
`;

export const City = styled.p`
  font-size: 0.875rem;
  color: #404b69;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
