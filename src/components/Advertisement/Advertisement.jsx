import PropTypes from 'prop-types';

import { Section } from './Advertisement.styled';
import { AdvertisementsMarkup } from '../AdvertisementsMarkup/AdvertisementsMarkup';

export const AdvertisementComponent = ({ advertisement }) => {
  return (
    <Section>
      <AdvertisementsMarkup items={advertisement} />
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
