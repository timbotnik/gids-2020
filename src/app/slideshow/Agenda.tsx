import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody
      header={<Header title="Agenda: learn things!" />}
      className="p-8"
    >
      <ul>
        <li>Quick tour of Data-Driven Applications</li>
        <li>Common tradeoffs in development</li>
        <li>Emerging patterns and tooling</li>
        <li>Q &amp; A</li>
      </ul>
    </SlideBody>
  );
}
