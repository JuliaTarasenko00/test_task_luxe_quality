import { useEffect, useState } from 'react';
import { ref, child, get } from 'firebase/database';
import { database } from '../../components/config/firebase-config';
import { AdvertisementComponent } from '../../components/Advertisement/Advertisement';
import { FilterComponent } from '../../components/Filter/Filter';
import { MapComponent } from '../../components/Map/Map';
import { Container } from '../../globalStyle';
import { Wrapper } from './Home.styled';

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

  return (
    <section>
      <Container>
        <Wrapper>
          <FilterComponent />
          <MapComponent advertisement={Object.entries(advertisement)} />
          <AdvertisementComponent
            advertisement={Object.values(advertisement)}
          />
        </Wrapper>
      </Container>
    </section>
  );
};

export default HomePage;
