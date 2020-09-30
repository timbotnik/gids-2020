import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import useSteps from "../../components/deck/useSteps";

export default function Slide() {
  const [currentStep] = useSteps(3);
  return (
    <SlideBody
      header={
        <Header
          title={
            <>
              <p>Loading Pattern:</p>
              <p>Components declare data dependencies</p>
            </>
          }
        />
      }
      className="p-8"
    >
      <>
        <ul>
          <li>Data needs are described by the component</li>
          <li>Co-located with the UI code that consumes it</li>
          <li>GraphQL enables some stellar workflows here</li>
        </ul>
      </>
    </SlideBody>
  );
}
