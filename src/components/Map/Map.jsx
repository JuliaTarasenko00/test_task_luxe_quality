import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as maptilersdk from '@maptiler/sdk';
import { Marker } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';
import { onValue, ref } from 'firebase/database';
import { database } from '../config/firebase-config';

const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

export const MapComponent = ({ advertisement }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const ukraine = { lng: 31.16558, lat: 48.379433 };
  const [zoom] = useState(5.2);

  maptilersdk.config.apiKey = MAP_API_KEY;

  maptilersdk.config.secondaryLanguage = maptilersdk.Language.FRENCH;
  maptilersdk.config.primaryLanguage = maptilersdk.Language.UKRAINIAN;

  const locationMarker = advertisement.map(name => ({
    location: [name[1].lng, name[1].lat],
    id: name[0],
  }));

  useEffect(() => {
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [ukraine.lng, ukraine.lat],
      zoom: zoom,
    });

    map.current.on('load', () => {
      locationMarker.map(({ location, id }) => {
        const marker = new Marker({ color: '#ceff7b' })
          .setLngLat(location)
          .addTo(map.current);

        marker.getElement().addEventListener('click', () => {
          const adRef = ref(database, `/advertisement/${id}`);
          onValue(adRef, snapshot => {
            const data = snapshot.val();
            console.log(data);
          });
        });
      });
    });
  }, [ukraine.lng, ukraine.lat, zoom, locationMarker]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};
