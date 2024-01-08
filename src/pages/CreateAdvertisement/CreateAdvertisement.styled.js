import styled from 'styled-components';

export const Section = styled.section`
  height: calc(100vh - 124px);
  overflow-y: auto;
  padding: 40px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const WrapperSuccessful = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 50px;
`;

export const ButtonNavigate = styled.button`
  cursor: pointer;
  padding: 15px;
  border-radius: 15px;
  border: none;
  background-color: #283149;
  color: #fff;
  font-size: 1rem;
  transition: background-color 250ms ease;

  &:hover,
  :focus {
    background-color: #21232a;
  }
`;
