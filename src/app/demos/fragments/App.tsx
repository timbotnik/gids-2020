import React from "react";
import { WaterfallList } from "./app/WaterfallList";
import { Nav } from "./app/Nav";

export function App() {
  return (
    <div className="fixed h-full w-full flex flex-col">
      <Nav />
      <WaterfallList />
    </div>
  );
}
