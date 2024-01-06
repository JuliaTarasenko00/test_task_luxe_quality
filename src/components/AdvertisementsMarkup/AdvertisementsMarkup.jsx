import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { IoMdHeartEmpty } from 'react-icons/io';
import {
  ButtonFavorite,
  City,
  Img,
  Item,
  List,
  MinimalPrice,
  MinimalPriceTitle,
  ModelName,
  Name,
  Rating,
  WrapperDescription,
  WrapperImg,
} from './AdvertisementsMarkup.styled';

export const AdvertisementsMarkup = ({ items }) => {
  return (
    <List>
      {items.map(
        ({ city, minimal_price_UAH, id, model_name, name, rating, images }) => {
          return (
            <Item key={id}>
              <WrapperImg>
                <Img src={images} alt={name} />
                <ButtonFavorite type="button">
                  <IoMdHeartEmpty />
                </ButtonFavorite>
              </WrapperImg>
              <WrapperDescription>
                <Name>{name}</Name>
                <ModelName>{model_name}</ModelName>
                <Rating>rating {rating}</Rating>
                <MinimalPriceTitle>
                  Мiнiмальна вартiсть послуги
                </MinimalPriceTitle>
                <MinimalPrice>{minimal_price_UAH} грн</MinimalPrice>
                <City>
                  <GrLocation />
                  {city}
                </City>
              </WrapperDescription>
            </Item>
          );
        }
      )}
    </List>
  );
};

AdvertisementsMarkup.propTypes = {
  items: PropTypes.arrayOf(
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
