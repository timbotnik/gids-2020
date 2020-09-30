import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody
      header={<Header title="Developer Tools: state of web dev is 🔥" />}
      className="p-8"
    >
      <ul>
        <li>Component frameworks, design systems</li>
        <li>ES Modules, Typescript, Babel, CSS in JS</li>
        <li>Async / await, web workers, ...</li>
        <li>Also, TOOLS!!!</li>
      </ul>
    </SlideBody>
  );
}
