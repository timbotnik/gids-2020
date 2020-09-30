import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";

export default function Slide() {
  return (
    <SlideBody centered>
      <p className="w-1/2 text-lg">
        <span className="text-red-500">Warning:</span> the techniques and
        methods you are about to see could dramatically increase your user's
        engagment. Please dev responsibly.
      </p>
    </SlideBody>
  );
}
