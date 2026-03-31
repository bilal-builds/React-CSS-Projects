import React from 'react';
import ContactForm from './components/ContactForm';
import CssLoader from './components/CssLoader';
import FlipCard from './components/FlipCard';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ContactForm />
      <CssLoader />
      <FlipCard />
      <SearchBox />
    </div>
  );
}

export default App;
