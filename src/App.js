import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HotelView from "./components/HotelView";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  //time delay to show loading animation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          {loading ? (
            <Spinner />
          ) : (
            <HotelView />
          )}
        </div>
      </div>
    </>
  );
}

export default App;



module.export = () => {

}