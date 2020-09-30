import React from "react";
import classnames from "classnames";

interface Props {
  className?: string;
  url: string;
}

export function SlideImage({ className = "w-full h-full", url }: Props) {
  return (
    <div
      className={classnames(className)}
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
