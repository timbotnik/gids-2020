import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Loading: GraphQL Fragments" />}>
      <div className="flex h-full">
        <div
          className="flex-1 mr-10"
          style={{
            backgroundImage: "url('/img/WaterfallListItem2.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-right mr-2 mt-16">
            1. <em>describe</em> fragment details
          </div>
        </div>
        <div
          className="flex-1"
          style={{
            backgroundImage: "url('/img/WaterfallList2.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-right mr-2">2. fetch query + fragments</div>
        </div>
      </div>
    </SlideBody>
  );
}
