import React from "react";

interface Props {
  symbol: string;
  label: string;
}

export function Emoji({ symbol, label }: Props) {
  return (
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  );
}
