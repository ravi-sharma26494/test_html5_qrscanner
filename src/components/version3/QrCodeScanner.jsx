import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import ScanResults from "./ScanResults";
import sound from "../../../src/assets/mp3/sound-effect.mp3";


const QrCodeScanner = () => {
  const [html5QrCode, setHtml5QrCode] = useState(null);
  const[showStopButton,setShowStopButton] = useState(true);
  const [decodedResults, setDecodedResults] = useState([]);

  const id = "reader";

  useEffect(() => {
    const startScanning = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
          const cameraId = devices[0].id;
          const qrCode = new Html5Qrcode(id);
          setHtml5QrCode(qrCode);
          await qrCode.start(cameraId, {
            fps: 2,
            qrbox: { width: 250, height: 250 },
          }, (decodedText, decodedResult) => {
            console.log(decodedText);
            // for the table to display the scanned results
            const soundEffect = new Audio(sound);
            soundEffect.play();
            setDecodedResults((prevResults) => [
                ...prevResults,
                decodedText,
              ]);
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    startScanning();

    return () => {
      if (html5QrCode) {
        html5QrCode.stop().then(() => {
          console.log("QR code scanner stopped.");
        }).catch((err) => {
          console.log(err);
        });
      }
    };
  }, []);

  const handleStopScanning = () => {
    if (html5QrCode) {
      html5QrCode.stop().then(() => {
        console.log("QR code scanner stopped.");
      }).catch((err) => {
        console.log(err);
      });
      setShowStopButton(false);
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column">
      <div id={id} className=" col-sm mb-2"></div>
      {showStopButton && <button className="btn btn-primary" onClick={handleStopScanning}>Stop Scanning</button>}
      {/* <button className="btn btn-primary" onClick={handleStopScanning}>Stop Scanning</button> */}
      {decodedResults.length > 0 && <ScanResults data={decodedResults}/>}
    </div>
  );
};

export default QrCodeScanner;
