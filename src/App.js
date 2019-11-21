import React from "react";
import "./App.css";
import Header from "./shared/Header";
import RentalList from "./components/rental/RentalList";

function App() {
  return (
    <div className="App">
      <Header />
      <RentalList />
    </div>
  );
}

export default App;
