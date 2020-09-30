import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody
      header={<Header title="Error patterns: when something goes wrong..." />}
      className="px-8"
    >
      <ul>
        <li>Inline error messages</li>
        <li>Error banners</li>
        <li>Error popups / toasts</li>
        <li>Error boundaries</li>
      </ul>
    </SlideBody>
  );
}
