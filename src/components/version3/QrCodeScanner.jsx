import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QrCodeScanner = () => {
  const [html5QrCode, setHtml5QrCode] = useState(null);
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
            fps: 10,
            qrbox: { width: 250, height: 250 },
          }, (decodedText, decodedResult) => {
            console.log(decodedText);
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
    }
  };

  return (
    <div>
      <div id={id}></div>
      <button onClick={handleStopScanning}>Stop Scanning</button>
    </div>
  );
};

export default QrCodeScanner;
