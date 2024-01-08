import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  display: grid;
  place-items: center center;

  & svg {
    width: 35px;
    height: 35px;
  }
`;
