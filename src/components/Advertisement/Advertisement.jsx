import PropTypes from 'prop-types';
import { Section } from './Advertisement.styled';
import { AdvertisementsMarkup } from '../AdvertisementsMarkup/AdvertisementsMarkup';
import { useSelector } from 'react-redux';

export const AdvertisementComponent = ({ advertisement }) => {
  const card = useSelector(state => state.card.card);
  const items = card.length === 0 ? advertisement : card;

  return (
    <Section>
      <AdvertisementsMarkup items={items} />
    </Section>
  );
};

AdvertisementComponent.propTypes = {
  advertisement: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      minimal_price_UAH: PropTypes.number,
      image: PropTypes.string,
      id: PropTypes.number,
      model_name: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
    })
  ).isRequired,
};
