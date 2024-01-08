import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Marker } from '@maptiler/sdk';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './modalMap.css';
import { fromAddress, fromLatLng, setDefaults } from 'react-geocode';
import { Autocomplete, TextField } from '@mui/material';
import {
  ButtonCancelCity,
  ButtonSubmitCity,
  ErrorMessage,
  FormModal,
  WrapperModal,
} from '../FormCreateUnt.styled';

const ukraine = { lng: 31.16558, lat: 48.379433 };
maptilersdk.config.apiKey = 'iu29tgeTe6X0Pbx8qmxf';
maptilersdk.config.primaryLanguage = maptilersdk.Language.UKRAINIAN;

const MapComponent = ({ setLat, setLng, setFrom }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [options, setOptions] = useState([]);
  const [locationMarker, setLocationMarker] = useState([]);

  setDefaults({
    key: 'AIzaSyAfuHNEvoj6jZhloBjWUz3Lrhq-JQQe6m0',
    language: 'uk',
    region: 'ua',
  });

  useEffect(() => {
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [ukraine.lng, ukraine.lat],
      zoom: 4.8,
    });

    map.current.on('click', async e => {
      const { lng, lat } = e.lngLat;
      setLocationMarker([lng, lat]);

      await getFromLatLng(lng, lat);
    });

    if (locationMarker.length !== 0) {
      new Marker({ color: '#ceff7b' })
        .setLngLat(locationMarker)
        .addTo(map.current);
    }

    // eslint-disable-next-line
  }, [locationMarker]);

  const handelChange = async (ev, newValue) => {
    if (newValue === '') return;

    setValue(newValue);
    try {
      const { results } = await fromAddress(newValue);
      setOptions(results);
    } catch (error) {
      return;
    }
  };
  const handelSubmit = ev => {
    ev.preventDefault();

    if (!value || value === '') return;

    const { lat, lng } = options[0].geometry.location;
    setLocationMarker([lng, lat]);

    const address = options[0].formatted_address;
    const addressArray = address.split(', ');
    const city = [...addressArray].slice(0, 1).join(' ');
    const region = [...addressArray].slice(1, 2).join(' ');
    const country = [...addressArray].slice(2, 3).join(' ');

    setFrom({
      city,
      region,
      country,
    });

    setLat(lat);
    setLng(lng);
  };

  const getFromLatLng = async (lat, lng) => {
    try {
      const { results } = await fromLatLng(lng, lat);
      const address = results[0].formatted_address;

      const addressArray = address.split(', ');
      const cityArray = [...addressArray].slice(0, 1).join(' ').split(' ');
      const city = [...cityArray].slice(1).join(' ');
      const region = [...addressArray].slice(1, 2).join(' ');
      const country = [...addressArray].slice(2).join(' ');

      setValue(`${city}, ${region}, ${country}`);
    } catch (error) {
      return;
    }
  };

  const city = !value || value === '';

  return (
    <WrapperModal>
      <FormModal onSubmit={handelSubmit}>
        <Autocomplete
          options={options?.map(option => `${option.formatted_address}`)}
          value={value}
          onChange={(ev, newValue) => setValue(newValue)}
          onInputChange={handelChange}
          isOptionEqualToValue={option => option}
          renderInput={params => (
            <TextField
              {...params}
              label=" Місце розташування технічного засобу"
            />
          )}
        />
        {city && isSubmit && (
          <ErrorMessage className="error_modal_title">
            Це поле обов’язкове
          </ErrorMessage>
        )}
        <ButtonCancelCity
          type="button"
          onClick={() => {
            setValue('');
            setIsSubmit(false);
            setOptions([]);
            setLocationMarker([]);
          }}
        >
          Скасувати
        </ButtonCancelCity>
        <ButtonSubmitCity type="submit" onClick={() => setIsSubmit(true)}>
          Підтвердити місце розташування
        </ButtonSubmitCity>
      </FormModal>
      <div className="map-wrap-modal">
        <div ref={mapContainer} className="map-modal" />
      </div>
    </WrapperModal>
  );
};

export default MapComponent;

MapComponent.propTypes = {
  setLat: PropTypes.func.isRequired,
  setLng: PropTypes.func.isRequired,
  setFrom: PropTypes.func.isRequired,
};
