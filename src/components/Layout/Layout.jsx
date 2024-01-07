import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Container } from '../../globalStyle';
import {
  ButtonLanguage,
  Header,
  Link,
  LogoName,
  Nav,
  Wrapper,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <LogoName>Rentzila</LogoName>
            <Nav>
              <Link to="/" activeclassname="active">
                Оголошення
              </Link>

              <Link to="create-unit" className="create">
                <FiPlus /> Подати оголошення
              </Link>
            </Nav>
            <ButtonLanguage type="button">УКР / UAH</ButtonLanguage>
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
