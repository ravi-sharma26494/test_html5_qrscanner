import React, { useState, useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import 'bootstrap/dist/css/bootstrap.css'


function QrScanner() {
    const [scanning, setScanning] = useState(false);
    const [qrData, setQrData] = useState(null);
    const [tableData, setTableData] = useState([]);
    const qrRef = useRef(null);
    const qr = useRef(null);
  
    useEffect(() => {
        let isMounted = true;
      
        if (scanning) {
          qr.current = new Html5Qrcode("reader");
          qr.current.start({ facingMode: 'environment' }, {
            fps: 30,
            qrbox: 250
          }, qrResult => {
            setQrData(qrResult);
            console.log(qrResult);
            fetch(`http://localhost:3001/products/1234567890`)
              .then(res => res.json())
              .then(data => {
                if (isMounted) {
                  setTableData([...tableData, data]);
                }
              });
          }, error => {
            console.log(error + "uo");
          });
        }
      
        return () => {
          isMounted = false;
      
          if (qr.current && qr.current.isScanning()) { // add a check for isScanning
            qr.current.stop().then((ignore) => {
              console.log("scanner is stopped")
            }).catch((error) => {
              console.log(error)
            });
          }
        }
      }, [scanning]);
      
      
  
    const startScanning = () => {
      setScanning(true);
    };
  
    const stopScanning = () => {
      setScanning(false);
    };

  const renderTable = () => {
    return (
      <div className="table-responsive">
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            {!scanning && <button className="btn btn-primary" onClick={startScanning}>Start</button>}
            {scanning && <button className="btn btn-danger" onClick={stopScanning}>Stop</button>}
          </div>
          <div id='reader'></div>
          {qrData && <p>QR code data: {qrData}</p>}
          {tableData.length > 0 && renderTable()}
        </div>
      </div>
    </div>
  );
}

export default QrScanner;
