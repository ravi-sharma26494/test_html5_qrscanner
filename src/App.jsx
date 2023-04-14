import React from "react";
import "./App.css";
import QrCodeScanner from "./components/version3/QrCodeScanner";

const App = () => {
  return (
    <div className="App">
      <div className="container-sm border border-primary rounded p-2 bg-body-tertiary">
        <div className="row">
        
            <QrCodeScanner />
  
        
        </div>
      </div>
      
    </div>
  );
};

export default App;
