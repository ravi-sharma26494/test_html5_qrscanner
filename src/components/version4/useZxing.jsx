import { BrowserMultiFormatReader } from '@zxing/library';
import { useEffect, useMemo, useRef, useState } from 'react';

const useZxing = ({
  constraints = {
    audio: false,
    video: {
      facingMode: 'environment',
    },
    advanced:[{zoom: 2}]
  },
  hints,
  timeBetweenDecodingAttempts = 100,
  onResult = () => {},
  onError = () => {},
} = {}) => {
  const ref = useRef(null);
  const [scannedResult, setScannedResult] = useState('');

  const reader = useMemo(() => {
    const instance = new BrowserMultiFormatReader(hints);
    instance.timeBetweenDecodingAttempts = timeBetweenDecodingAttempts;
    return instance;
  }, [hints, timeBetweenDecodingAttempts]);

  useEffect(() => {
    if (!ref.current) return;
    reader.decodeFromConstraints(constraints, ref.current, (result, error) => {
      if (result) {
        setScannedResult(result.getText());
        onResult(result);
      }
      if (error) onError(error);
    });
    return () => {
      reader.reset();
    };
  }, [ref, reader]);

  return { ref, scannedResult };
};

export default useZxing;
