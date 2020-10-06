import React from "react";

interface Props {
  title: React.ReactNode;
}

export function Header({ title }: Props) {
  return (
    <div className="flex items-end justify-between w-full border-b border-white pb-2 mb-4">
      <h2 className="ml-4 leading-none tracking-wider">{title}</h2>
      <img className="h-6" src="/img/blm.png" alt="BLM logo" />
    </div>
  );
}
