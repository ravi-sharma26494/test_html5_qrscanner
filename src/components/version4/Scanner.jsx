import useZxing from "./useZxing";

const Scanner = () => {
  const { ref, scannedResult } = useZxing({
    onResult: (result) => {
      console.log(result.getText());
    },
  });

  return (
    <>
      <div className="scanner-container">
        <video className="scanner" ref={ref} />
        <div className="scanner-target" />
      </div>
      {scannedResult && <p>Scanned result: {scannedResult}</p>}
    </>
  );
};

export default Scanner;
