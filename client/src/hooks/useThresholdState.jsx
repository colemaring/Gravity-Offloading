import { useState, useCallback } from "react";

const useThresholdState = (initialValue, threshold) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useCallback(
    (newValue) => {
      if (Math.abs(newValue - value) > threshold) {
        setValue(newValue);
      }
    },
    [value, threshold]
  );

  return [value, updateValue];
};

export default useThresholdState;
