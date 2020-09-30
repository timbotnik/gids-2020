import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Reactivity" />} centered>
      <div className="w-3/4 text-xl italic tracking-wide">
        <p>
          As a user, I want to get contextual feedback when I take actions so
          that I can understand the outcomes and implications of those actions.
        </p>
      </div>
      <code className="text-2xl mt-12 line-through">{"ui = 𝑓(data)"}</code>
      <code className="text-2xl mt-4">{"ui = 𝑓(data, state)"}</code>
    </SlideBody>
  );
}
