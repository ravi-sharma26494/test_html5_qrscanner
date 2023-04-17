import React from "react";
import "./App.css";
import QrCodeScanner from "./components/version3/QrCodeScanner";
import Scanner from "./components/version4/Scanner";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        {/* <div className="row"> */}
        
            {/* <QrCodeScanner /> */}
            <Scanner />
  
        
        {/* </div> */}
      </div>
      
    </div>
  );
};

export default App;
