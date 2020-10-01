import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="Resources" />} className="p-8">
      <ul>
        <li>
          Slides / Demo App Source:{" "}
          <a
            className="ml-2 text-indigo-400"
            href="https://github.com/timbotnik/gids-2020"
          >
            github.com/timbotnik/gids-2020
          </a>
        </li>
        <li>
          Spacekit:{" "}
          <a
            className="ml-2 text-indigo-400"
            href="https://github.com/apollographql/space-kit"
          >
            github.com/apollographql/space-kit
          </a>
        </li>
        <li>
          Learn GraphQL:{" "}
          <a className="ml-2 text-indigo-400" href="https://graphql.org/learn/">
            graphql.org/learn/
          </a>
        </li>
        <li>
          Apollo Docs:{" "}
          <a
            className="ml-2 text-indigo-400"
            href="https://apollographql.com/docs"
          >
            apollographql.com/docs
          </a>
        </li>
        <li>We're hiring!</li>
      </ul>
    </SlideBody>
  );
}
