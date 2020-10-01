import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import { SlideImage } from "components/deck/SlideImage";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Apps: built as component trees" />}>
      <SlideImage url="/img/tree.svg" />
    </SlideBody>
  );
}
