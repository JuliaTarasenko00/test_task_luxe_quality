import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import * as maptilersdk from '@maptiler/sdk';
import { Marker } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';
import { onValue, ref } from 'firebase/database';
import { database } from '../config/firebase-config';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/slice';

const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

export const MapComponent = ({ locationMarker }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const dispatch = useDispatch();
  const ukraine = useMemo(() => ({ lng: 31.16558, lat: 48.379433 }), []);
  const [zoom] = useState(5.2);

  maptilersdk.config.apiKey = MAP_API_KEY;

  maptilersdk.config.secondaryLanguage = maptilersdk.Language.FRENCH;
  maptilersdk.config.primaryLanguage = maptilersdk.Language.UKRAINIAN;

  const getAdvertisement = useCallback(
    ids => {
      let cards = [];

      if (!Array.isArray(ids)) {
        ids = [ids];
      }

      ids.forEach(id => {
        const adRef = ref(database, `/advertisement/${id}`);
        onValue(adRef, snapshot => {
          const data = snapshot.val();

          cards = [...cards, data];
        });
      });
      dispatch(addCard(cards));
    },
    [dispatch]
  );

  useEffect(() => {
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [ukraine.lng, ukraine.lat],
      zoom: zoom,
    });

    const markers = locationMarker.map(({ location, id }) => {
      const marker = new Marker({ color: '#ceff7b' })
        .setLngLat(location)
        .addTo(map.current);

      marker.getElement().addEventListener('click', () => {
        getAdvertisement(id);
      });

      return marker;
    });

    map.current.on('zoomend', () => {
      const currentZoom = map.current.getZoom();
      if (currentZoom >= 5) {
        let visibleMarkerIds = [];
        markers.forEach((marker, index) => {
          if (map.current.getBounds().contains(marker.getLngLat())) {
            visibleMarkerIds.push(locationMarker[index].id);
          }
        });
        getAdvertisement(visibleMarkerIds);
      }
    });
  }, [ukraine.lng, ukraine.lat, zoom, locationMarker, getAdvertisement]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

MapComponent.propTypes = {
  locationMarker: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};
