import { useState } from 'react';
import { FormCreateUnt } from '../../components/FormCreateUnt/FormCreateUnt';
import { Container } from '../../globalStyle';
import { Section, Wrapper } from './CreateAdvertisement.styled';
import { Successful } from './Successful';

const CreateAdvertisement = () => {
  const [isSuccessful, setSuccessful] = useState(false);

  return (
    <Section>
      <Container>
        {isSuccessful && <Successful />}
        {!isSuccessful && (
          <Wrapper>
            <h2>Створити оголошення</h2>
            <FormCreateUnt setSuccessful={setSuccessful} />
          </Wrapper>
        )}
      </Container>
    </Section>
  );
};

export default CreateAdvertisement;
