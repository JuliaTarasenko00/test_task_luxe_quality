import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 9px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  outline: none;
  font-size: 1rem;

  &:focus {
    border: 1px solid orange;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TitleLocationTechnical = styled.p`
  margin-bottom: 8px;
  color: #283149;
  font-size: 0.875rem;
  letter-spacing: -0.02em;

  & span {
    color: red;
  }
`;

export const ButtonSelectMap = styled.button`
  display: block;
  padding: 15px;
  background-color: #283149;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.875rem;
  letter-spacing: -0.02em;
`;

export const ButtonSubmit = styled.button`
  padding: 12px 20px;
  background-color: #ceff7b;
  border-radius: 30px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
`;

export const WrapperInput = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -9px;
  left: 0;
  transform: translateY(9px);
  color: #ff0000c2;
  font-size: 12px;
  font-style: normal;
  line-height: 1.37;
`;
