import React, { useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

interface SlideEffectsProps {
  onNext: () => void;
  onPrev: () => void;
}

interface Props extends SlideEffectsProps {
  children: React.ReactNode;
}

export function SlideEffects({ children, onNext, onPrev }: Props) {
  const handleKeyPress = useCallback(
    ({ key }) => {
      if (key === "ArrowRight") {
        onNext();
      }
      if (key === "ArrowLeft") {
        onPrev();
      }
    },
    [onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
}
