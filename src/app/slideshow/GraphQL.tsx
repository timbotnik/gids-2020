import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";

export default function Slide() {
  return (
    <SlideBody centered>
      <div className="italic p-8 text-2xl text-indigo-400 tracking-wide">
        <p>
          GraphQL, despite the name, isn't simply a query language. It's a
          comprehensive solution to the problem of connecting modern apps to
          services in the cloud. As such, it forms the basis for a new and
          important layer in the modern application development stack:{" "}
          <span className="font-semibold">the data graph</span>. This new layer
          brings all of a company's app data and services together in one place,
          with one consistent, secure, and easy-to-use interface, so that anyone
          can draw upon it with minimal friction.
        </p>
        <p className="mt-2">- principledgraphql.com</p>
      </div>
    </SlideBody>
  );
}
