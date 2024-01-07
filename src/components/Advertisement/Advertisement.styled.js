import styled from 'styled-components';

export const Section = styled.div`
  width: 279px;
  height: calc(100vh - 108px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
  padding: 20px 0 100px 12px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.125rem;
  max-width: 220px;
`;
