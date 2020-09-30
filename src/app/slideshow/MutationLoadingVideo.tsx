import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";

export default function Slide() {
  return (
    <SlideBody className="h-full flex items-center justify-center">
      <video className="h-full" src="/video/mutation-loading.mov" controls />
    </SlideBody>
  );
}
