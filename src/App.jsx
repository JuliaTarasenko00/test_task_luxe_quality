import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const CreateAdvertisement = lazy(() =>
  import('./pages/CreateAdvertisement/CreateAdvertisement')
);

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create-unit" element={<CreateAdvertisement />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
