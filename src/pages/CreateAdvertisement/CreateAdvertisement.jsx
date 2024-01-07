import { FormCreateUnt } from '../../components/FormCreateUnt/FormCreateUnt';
import { Container } from '../../globalStyle';
import { Wrapper } from './CreateAdvertisement.styled';

const CreateAdvertisement = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <h2>Створити оголошення</h2>
          <FormCreateUnt />
        </Wrapper>
      </Container>
    </section>
  );
};

export default CreateAdvertisement;
