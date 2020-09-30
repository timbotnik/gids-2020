import { useState, useCallback, useEffect } from "react";

const SHOW_ALL_STEPS = false;

export default function useSteps(steps: number) {
  const [currentStep, setCurrentStep] = useState(0);
  const handleKeyPress = useCallback(
    ({ key }) => {
      if (key === "Enter" && currentStep < steps - 1) {
        setCurrentStep(currentStep + 1);
      }
    },
    [currentStep, steps]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return [SHOW_ALL_STEPS ? steps : currentStep];
}
