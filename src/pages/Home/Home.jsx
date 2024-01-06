import { useEffect, useState } from 'react';
import { child, get, ref } from 'firebase/database';
import { FilterComponent } from '../../components/Filter/Filter';
import { MapComponent } from '../../components/Map/Map';
import { Container } from '../../globalStyle';
import { Wrapper } from './Home.styled';
import { AdvertisementComponent } from '../../components/Advertisement/Advertisement';
import { database } from '../../components/config/firebase-config';

const HomePage = () => {
  const [advertisement, setAdvertisement] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    async function fetchAdvertisement() {
      try {
        const data = await get(child(dbRef, 'advertisement'));
        if (data.exists()) {
          setAdvertisement(data.val());
        } else {
          console.log('No data available for advertisement');
        }
      } catch (error) {
        console.error('Error fetching advertisement:', error);
      }
    }
    fetchAdvertisement();
  }, [dbRef]);

  const locationMarker = Object.entries(advertisement).map(name => ({
    location: [name[1].lng, name[1].lat],
    id: name[0],
  }));

  return (
    <section>
      <Container>
        <Wrapper>
          <FilterComponent />
          <MapComponent locationMarker={locationMarker} />
          <AdvertisementComponent
            advertisement={Object.values(advertisement)}
          />
        </Wrapper>
      </Container>
    </section>
  );
};

export default HomePage;
