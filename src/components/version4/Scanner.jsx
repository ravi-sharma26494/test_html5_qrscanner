import useZxing from "./useZxing";

const Scanner = () => {
  const { ref, scannedResult } = useZxing({
    onResult: (result) => {
      console.log(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      {scannedResult && <p>Scanned result: {scannedResult}</p>}
    </>
  );
};

export default Scanner;
