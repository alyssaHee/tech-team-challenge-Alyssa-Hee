import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import PageTitle from "./components/PageTitle/PageTitle.js";
import MemberDisplay from "./components/MemberDisplay/MemberDisplay.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <PageTitle text="Meet your F!ROSH Orientation Committee!" />
      <MemberDisplay />
      <Footer />
    </div>
  );
}

export default App;
