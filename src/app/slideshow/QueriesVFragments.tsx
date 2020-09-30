import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Tradeoff: Queries vs. Fragments" />}>
      <div className="flex h-full justify-center mt-8">
        <div>
          <h1>Queries</h1>
          <ul className="list-none">
            <li>Define a network transaction</li>
            <li>Provide data independence</li>
            <li>Can load in parallel</li>
            <li>Watch out for: loose couplings, N+1</li>
          </ul>
        </div>
        <div className="ml-16">
          <h1>Fragments</h1>
          <ul className="list-none">
            <li>Tightly co-located data dependencies</li>
            <li>Require parent to load</li>
            <li>Help avoid waterfalls</li>
            <li>Watch out for: boilerplate fatigue</li>
          </ul>
        </div>
      </div>
    </SlideBody>
  );
}
