import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const qrcodeRegionId = "html5qr-code-full-region";

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

const PromMode = (props) => {
  useEffect(() => {
    const config = createConfig(props);
    const verbose = props.verbose === true;
    if (!(props.qrCodeSuccessCallback)) {
      throw "qrCodeSuccessCallback is required callback.";
    }
    const html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId);
    html5QrcodeScanner.start({facingMode:"environment"},config,props.qrCodeSuccessCallback);

    // return () => {
    //   html5QrcodeScanner.stop().catch(error => {
    //     console.error("Failed to clear html5QrcodeScanner. ", error);
    //   });
    // };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div id={qrcodeRegionId} />
        </div>
      </div>
    </div>
  );
};

export default PromMode;
