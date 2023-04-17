import useZxing from "./useZxing";
import "./Scanner.css"
const Scanner = () => {
  const { ref, scannedResult } = useZxing({
    onResult: (result) => {
      console.log(result.getText());
    },
  });
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
    <>

    <div className="scanner-container">
      <video className="scanner" ref={ref}/>
      <div className="scanner-target" />
    </div>
    {scannedResult && <p>Scanned result: {scannedResult}</p>}
  </>
  );
};

export default Scanner;
