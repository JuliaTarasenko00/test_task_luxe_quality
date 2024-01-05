import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '../../globalStyle';

const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <div>
            <p>rentzila</p>
            <NavLink to="/">Оголошення</NavLink>
            <div>
              <button type="button">+ Подати оголошення</button>
              <button type="button">УКР / UAH</button>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
