import { useNavigate } from 'react-router-dom';
import img from '../../assets/img/successful.png';
import {
  ButtonNavigate,
  WrapperSuccessful,
} from './CreateAdvertisement.styled';

export const Successful = () => {
  const navigate = useNavigate();
  return (
    <WrapperSuccessful>
      <img src={img} alt="Ваше оголошення розміщено" width="300" height="300" />
      <ButtonNavigate type="button" onClick={() => navigate('/')}>
        Повернутися до оголошень
      </ButtonNavigate>
    </WrapperSuccessful>
  );
};
