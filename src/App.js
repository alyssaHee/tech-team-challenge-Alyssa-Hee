import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import PageTitle from './components/PageTitle/PageTitle.js';
import data from './members_details.json';

function App() {
  return (
    <div className="App">
      <Header />
      <PageTitle text="Meet your F!ROSH Orientation Committee!" />
    </div>
  );
}

export default App;
