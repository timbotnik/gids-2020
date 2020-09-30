import React from "react";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import { SlideBody } from "./SlideBody";

export function SlideLoading() {
  return (
    <SlideBody centered>
      <LoadingSpinner />
    </SlideBody>
  );
}
