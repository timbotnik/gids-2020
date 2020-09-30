import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import { SlideImage } from "components/deck/SlideImage";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Storybook: your component test lab" />}>
      <SlideImage url="/img/storybook.png" />
    </SlideBody>
  );
}
