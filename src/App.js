import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HotelView from "./components/HotelView";

function App() {
  return (
    <>
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <HotelView />
      </div>
    </div>
      <div className="loader-container">
      <div className="loader">
        <div className="face face-1">
          <div className="circle"></div>
        </div>
        <div className="face face-2">
          <div className="circle"></div>
        </div>
      </div>
      </div>
      </>
  );
}

export default App;
