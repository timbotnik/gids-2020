import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import { SlideImage } from "components/deck/SlideImage";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Apps: trees that load data" />}>
      <SlideImage url="/img/tree-loading.png" />
    </SlideBody>
  );
}
