import React from "react";
import ReactDOM from "react-dom";
import { emotionCacheProviderFactory } from "@apollo/space-kit/emotionCacheProviderFactory";
import { App } from "./App";
import "./styles/tailwind.css";

const EmotionCacheProvider = emotionCacheProviderFactory(
  document.querySelector<HTMLStyleElement>("#spaceKitEmotionStyleContainer")
);

ReactDOM.render(
  <EmotionCacheProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EmotionCacheProvider>,
  document.getElementById("root")
);
