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
  cursor: pointer;
  display: block;
  padding: 15px;
  background-color: #283149;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.875rem;
  letter-spacing: -0.02em;
  transition: background-color 250ms ease;

  &:hover,
  :focus {
    background-color: #21232a;
  }
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  padding: 12px 20px;
  background-color: #1f7a37;
  border-radius: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  transition: background-color 250ms ease;

  &:hover,
  :focus {
    background-color: #1b602d;
  }
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

  &.error_modal_title {
    position: static;
  }
`;

export const WrapperModal = styled.div`
  background-color: #fff;
  padding: 35px 20px 50px;
`;

export const FormModal = styled.form`
  margin-bottom: 20px;
`;

export const ButtonSubmitCity = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 50px;
  padding: 5px 10px;
  border-radius: 10px;
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

export const ButtonCancelCity = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  background-color: transparent;
  color: #445c9d;
  left: 50px;
  text-decoration: underline;
  border: none;
  font-size: 1.3rem;
  transition: color 250ms ease;

  &:hover,
  :focus {
    color: #21232a;
  }
`;

export const InputSelectImg = styled.input`
  margin-top: 20px;
`;

export const DeleteButtonImg = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #ff00009e;
  text-decoration: underline;
  font-size: 1rem;
  transition: color 250ms ease;

  &:hover,
  :focus {
    color: red;
  }
`;
