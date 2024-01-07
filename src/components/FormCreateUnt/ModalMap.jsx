import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Marker } from '@maptiler/sdk';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './modalMap.css';
import { fromAddress, fromLatLng, setDefaults } from 'react-geocode';

const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

const MapComponent = ({ setLat, setLng, setFrom }) => {
  const mapContainer = useRef(null);
  const ukraine = { lng: 31.16558, lat: 48.379433 };
  const map = useRef(null);
  const [city, setCity] = useState('');
  const [options, setOptions] = useState([]);
  const [locationMarker, setLocationMarker] = useState([]);

  maptilersdk.config.apiKey = MAP_API_KEY;
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
    map.current.on('click', e => {
      const { lng, lat } = e.lngLat;
      setLocationMarker([lng, lat]);

      getFromLatLng(lng, lat);
    });

    if (locationMarker.length !== 0) {
      new Marker({ color: '#ceff7b' })
        .setLngLat(locationMarker)
        .addTo(map.current);
    }

    // eslint-disable-next-line
  }, [locationMarker]);

  const handelChange = async ev => {
    const name = ev.target.value;
    setCity(name);

    try {
      const { results } = await fromAddress(name);
      setOptions(results);
    } catch (error) {
      return;
    }
  };

  const handelSubmit = ev => {
    ev.preventDefault();

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

      setFrom({
        city,
        region,
        country,
      });

      setLat(lng);
      setLng(lat);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: 50 }}>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" value={city} onChange={handelChange} />
      </form>
      <div className="map-wrap-modal">
        <div ref={mapContainer} className="map-modal" />
      </div>
    </div>
  );
};

export default MapComponent;

MapComponent.propTypes = {
  setLat: PropTypes.func.isRequired,
  setLng: PropTypes.func.isRequired,
  setFrom: PropTypes.func.isRequired,
};
