import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import { SlideImage } from "components/deck/SlideImage";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Mutations: Using Apollo Client" />}>
      <SlideImage url="/img/Mutation.png" />
    </SlideBody>
  );
}
