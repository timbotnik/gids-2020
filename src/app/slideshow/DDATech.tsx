import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody
      header={<Header title="Data-Driven Technologies on the Web" />}
      className="px-8"
    >
      <ul>
        <li>
          <p>Components</p>
          <code>{"ui = 𝑓(data)"}</code>
          <img
            className="w-8 h-8 inline ml-2"
            src="/logo512.png"
            alt="React Logo"
          />
          <img
            className="w-10 h-10 inline"
            src="/img/angular-logo.png"
            alt="Angular Logo"
          />
          <img
            className="w-8 h-6 inline"
            src="/img/vue-logo.png"
            alt="Vue Logo"
          />
        </li>
        <li>
          <p>Code "Bundles"</p>
          <code>{'<script src="/some/js/bundle.js"></script>'}</code>
        </li>
        <li>
          APIs{" "}
          <ul className="ml-4">
            <li>
              GraphQL (Apollo, Relay, Urql){" "}
              <img
                className="w-8 h-8 inline ml-2"
                src="/img/gql-logo.png"
                alt="GraphQL Logo"
              />
            </li>
            <li>REST</li>
            <li>Websockets</li>
          </ul>
        </li>
      </ul>
    </SlideBody>
  );
}
