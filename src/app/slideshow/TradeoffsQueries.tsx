import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Tradeoff: Queries vs. Fragments" />}>
      <div className="flex h-full">
        <div
          className="flex-1 mr-10"
          style={{
            backgroundImage: "url('/img/WaterfallList1.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-right mr-2">1. fetch list of ids</div>
        </div>
        <div
          className="flex-1"
          style={{
            backgroundImage: "url('/img/WaterfallListItem1.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-right mr-2">
            <p>2. fetch details</p>
            <p>(N+1 query)</p>
          </div>
        </div>
      </div>
    </SlideBody>
  );
}
