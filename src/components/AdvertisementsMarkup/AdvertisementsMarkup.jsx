import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { IoMdHeartEmpty } from 'react-icons/io';

export const AdvertisementsMarkup = ({ items }) => {
  return (
    <ul>
      {items.map(
        ({ city, minimal_price_UAH, id, model_name, name, rating }) => {
          return (
            <li key={id}>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYutdY3RvPyroS4uQ048ou9SsoYERPb93qv5CrGkCvYxUcjGWFY19NRfGym7ajBgrPfo&usqp=CAU"
                  alt={name}
                />
                <button type="button">
                  <IoMdHeartEmpty />
                </button>
              </div>
              <div>
                <h3>{name}</h3>
                <p>{model_name}</p>
                <p>rating {rating}</p>
                <p>Мiнiмальна вартiсть послуги</p>
                <p>{minimal_price_UAH} грн</p>
                <p>
                  <GrLocation />
                  {city}
                </p>
              </div>
            </li>
          );
        }
      )}
    </ul>
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
