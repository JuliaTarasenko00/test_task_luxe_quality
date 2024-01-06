import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Container } from '../../globalStyle';
import {
  ButtonAdvertisement,
  ButtonLanguage,
  Header,
  Link,
  LogoName,
  Wrapper,
  WrapperButton,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <LogoName>Rentzila</LogoName>
            <Link to="/" activeclassname="active">
              Оголошення
            </Link>
            <WrapperButton>
              <ButtonAdvertisement type="button">
                <FiPlus /> Подати оголошення
              </ButtonAdvertisement>
              <ButtonLanguage type="button">УКР / UAH</ButtonLanguage>
            </WrapperButton>
          </Wrapper>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
