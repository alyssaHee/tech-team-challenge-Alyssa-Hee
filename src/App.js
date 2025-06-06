import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import PageTitle from './components/PageTitle/PageTitle.js';
import MemberDisplay from './components/MemberDisplay/MemberDisplay.js'

function App() {
  return (
    <div className="App">
      <Header />
      <PageTitle text="Meet your F!ROSH Orientation Committee!" />
      <MemberDisplay />
    </div>
  );
}

export default App;
