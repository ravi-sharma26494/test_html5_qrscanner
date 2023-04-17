import useZxing from "./useZxing";
import "./Scanner.css"
const Scanner = () => {
  const { ref, scannedResult } = useZxing({
    onResult: (result) => {
      console.log(result.getText());
    },
  });
  const isMobileDevice = /Mobi/.test(navigator.userAgent);
 /// added css for zoom in feature support
 const scannerContainerStyle = {
  position: "relative",
  width: "100vw",
  height: isMobileDevice ? "100vh" : "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  maxWidth: "600px",
  margin: "0 auto",
};

const scannerTargetStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  border: "2px dashed white",
  borderRadius: "10px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  zIndex: "1",
};

const videoStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(1.5)", // Increase scale to make code appear larger
  transformOrigin: "center", // Keep aspect ratio
  objectFit: "cover", // Crop video to focus on center
  zIndex: "0",
  maxWidth: "100%",
  height: "auto",
};  

  return (
    <div style={scannerContainerStyle}>
      <div style={scannerTargetStyle}></div>
      <div className="video-container">
        <video style={videoStyle} className="scanner" ref={ref} />
      </div>
      {scannedResult && <p>Scanned result: {scannedResult}</p>}
    </div>
  );
};

export default Scanner;
