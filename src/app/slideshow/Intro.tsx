import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";

export default function Slide() {
  return (
    <SlideBody header={<Header title="👋 From Apollo" />} className="p-8">
      <ul>
        <li>Open Source + Product Team</li>
        <li>Laser-focused on GraphQL</li>
        <li>Helping customers put GraphQL into production at scale</li>
        <li>Learning by doing this ourselves...</li>
      </ul>
    </SlideBody>
  );
}
