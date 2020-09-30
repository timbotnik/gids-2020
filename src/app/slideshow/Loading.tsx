import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

export default function Slide() {
  console.log("hmm what's happening here");
  return (
    <SlideBody centered>
      <LoadingSpinner />
    </SlideBody>
  );
}
