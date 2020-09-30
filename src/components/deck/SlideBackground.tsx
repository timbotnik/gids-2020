import React from "react";

interface Props {
  children: React.ReactNode;
}

export function SlideBackground({ children }: Props) {
  return (
    <div className="fixed inset-0 px-16 pt-8 pb-12 bg-gradient-to-br from-indigo-900 via-black to-indigo-900 text-white">
      {children}
    </div>
  );
}
