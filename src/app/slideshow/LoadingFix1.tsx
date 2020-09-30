import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import useSteps from "../../components/deck/useSteps";

export default function Slide() {
  const [currentStep] = useSteps(3);
  return (
    <SlideBody
      header={<Header title="Loading Fix: Download the DB!" />}
      className="px-8 relative"
    >
      <ul>
        <li>
          <p>When to load data? On startup, just</p>
          <code>fetch('/all/the/things')</code>
        </li>
      </ul>
      {currentStep > 0 && <p>This might work for a small app but...</p>}
      {currentStep > 1 && (
        <h1 className="p-8 aboslute z-10 w-64 text-center text-red-600 font-bold border-4 border-red-600 rounded-lg transform rotate-45">
          JK DON'T DO THIS
        </h1>
      )}
    </SlideBody>
  );
}
