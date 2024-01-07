import { Section, Title } from './Advertisement.styled';
import { AdvertisementsMarkup } from '../AdvertisementsMarkup/AdvertisementsMarkup';
import { useSelector } from 'react-redux';

export const AdvertisementComponent = () => {
  const card = useSelector(state => state.card.card);

  return (
    <Section>
      <Title>Знайдено {card.length} оголошень на видимій території</Title>
      <AdvertisementsMarkup items={card} />
    </Section>
  );
};
