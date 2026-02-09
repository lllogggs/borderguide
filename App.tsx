import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

// Wrapper to handle scroll restoration manually since HashRouter doesn't always handle it automatically like BrowserRouter
const ScrollToTop = () => {
  const { pathname } = window.location;
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;