import React from "react";
import { ApolloIcon } from "@apollo/space-kit/icons/ApolloIcon";
import { SlideBody } from "../../components/deck/SlideBody";

export default function Slide() {
  return (
    <SlideBody centered>
      <div className="flex">
        <div className="flex-shrink-0 mt-24">
          <img
            className="rounded-full"
            alt="Tim's Portrait"
            src="/img/tim-portrait.jpg"
          />
        </div>
        <div className="ml-12 flex-1 max-w-4xl flex flex-col justify-between">
          <h2>GIDS.WEB 2020: </h2>
          <h1>Architecting Data-Driven Apps for UX Success</h1>
          <h2>
            <p>Tim Hingston</p>
            <p>
              Frontend Tech Lead / <ApolloIcon className="inline h-12" />
            </p>
          </h2>
        </div>
      </div>
    </SlideBody>
  );
}
