import useZxing from "./useZxing";
import "./Scanner.css"
const Scanner = () => {
  const { ref, scannedResult } = useZxing({
    onResult: (result) => {
      console.log(result.getText());
    },
  });
  const videoStyle = {
    transform: "scale(1.5)", // Increase scale to make code appear larger
    transformOrigin: "center", // Keep aspect ratio
    objectFit: "cover", // Crop video to focus on center
  };

  return (
    <>
      <div className="scanner-container">
        <div className="scanner-target" />
        <video style={videoStyle} className="scanner" ref={ref} />
      </div>
      {scannedResult && <p>Scanned result: {scannedResult}</p>}
    </>
  );
};

export default Scanner;
