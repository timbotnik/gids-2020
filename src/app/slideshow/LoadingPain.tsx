import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Pain Point: Loading" />} className="p-8">
      <ul>
        <li>When to load data?</li>
        <li>
          How much data do I <em>really need?</em>
        </li>
        <li>When is it "ready"?</li>
        <li>What does the user see in the meantime?</li>
      </ul>
    </SlideBody>
  );
}
