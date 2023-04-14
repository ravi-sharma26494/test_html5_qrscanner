import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
  let config = {};
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};

const Html5QrcodePlugin = (props) => {

  useEffect(() => {
    // when component mounts
    const config = createConfig(props);
    const verbose = props.verbose === true;
    // Suceess callback is required.
    if (!(props.qrCodeSuccessCallback)) {
      throw "qrCodeSuccessCallback is required callback.";
    }
    Html5Qrcode.getCameras().then((devices)=>{
      if(devices && devices.length){
       console.log("devices found", devices); 
      } else{
        return alert("NO DEVICES FOUND");
      }
    })
    const html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId, config, verbose);
    html5QrcodeScanner.start({ facingMode: "environment" }, config, 
    props.qrCodeSuccessCallback);

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.stop().then((ignore) => {
        // QR Code scanning is stopped.
        console.log("scanning is stopped");
      }).catch((err) => {
        console.log("Scanning stopping error:")
      });
    };
  }, []);

  return (
    <div id={qrcodeRegionId} />
  );
};

export default Html5QrcodePlugin;