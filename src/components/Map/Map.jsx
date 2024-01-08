import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as maptilersdk from '@maptiler/sdk';
import { Marker } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';

const ukraine = { lng: 31.16558, lat: 48.379433 };
maptilersdk.config.apiKey = 'iu29tgeTe6X0Pbx8qmxf';
maptilersdk.config.primaryLanguage = maptilersdk.Language.UKRAINIAN;

export const MapComponent = ({ locationMarker, getAdvertisement }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);
  const zoom = 5.2;

  useEffect(() => {
    if (!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [ukraine.lng, ukraine.lat],
        zoom: zoom,
      });
    }

    const markers = locationMarker.map(({ location, id }, index) => {
      if (!markersRef.current[index]) {
        const marker = new Marker({ color: '#ceff7b' })
          .setLngLat(location)
          .addTo(map.current);

        marker.getElement().addEventListener('click', async () => {
          await getAdvertisement(id);
        });

        markersRef.current[index] = marker;
      }
      return markersRef.current[index];
    });

    markersRef.current.forEach((marker, index) => {
      if (!locationMarker[index]) {
        marker.remove();
        marker.getElement().removeEventListener('click');
        markersRef.current[index] = null;
      }
    });

    map.current.on('zoomend', () => {
      let visibleMarkerIds = [];
      markers.forEach((marker, index) => {
        if (map.current.getBounds().contains(marker.getLngLat())) {
          visibleMarkerIds.push(locationMarker[index].id);
        }
      });
      getAdvertisement(visibleMarkerIds);
    });

    return () => {
      map.current.off('zoomend');
    };
  }, [locationMarker, getAdvertisement, zoom]);

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
  getAdvertisement: PropTypes.func.isRequired,
};
