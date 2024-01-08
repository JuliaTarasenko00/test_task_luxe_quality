import { useCallback, useEffect, useState } from 'react';
import { child, get, onValue, ref } from 'firebase/database';
import { MapComponent } from '../../components/Map/Map';
import { Container } from '../../globalStyle';
import { Wrapper } from './Home.styled';
import { AdvertisementComponent } from '../../components/Advertisement/Advertisement';
import { database } from '../../components/config/firebase-config';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/slice';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

const HomePage = () => {
  const dbRef = ref(database);
  const dispatch = useDispatch();
  const [advertisement, setAdvertisement] = useState([]);

  useEffect(() => {
    async function fetchAdvertisement() {
      try {
        const data = await get(child(dbRef, 'advertisement'));
        if (data.exists()) {
          setAdvertisement(data.val());
          dispatch(addCard(Object.values(data.val())));
        } else {
          console.log('No data available for advertisement');
        }
      } catch (error) {
        toast.error('Error fetching advertisement', styleToastify);
        console.log('Error fetching advertisement:', error);
      }
    }
    fetchAdvertisement();
  }, [dbRef, dispatch]);

  const locationMarker = Object.entries(advertisement).map(name => ({
    location: [name[1].lng, name[1].lat],
    id: name[0],
  }));

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
      return dispatch(addCard(cards));
    },
    [dispatch]
  );

  return (
    <section>
      <Container>
        <Wrapper>
          <MapComponent
            locationMarker={locationMarker}
            getAdvertisement={getAdvertisement}
          />
          <AdvertisementComponent />
        </Wrapper>
      </Container>
    </section>
  );
};

export default HomePage;
