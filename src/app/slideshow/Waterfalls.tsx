import React from "react";
import { SlideBody } from "../../components/deck/SlideBody";
import { Header } from "./Header";
import useSteps from "components/deck/useSteps";
import { Emoji } from "components/Emoji";

export default function Slide() {
  const [currentStep] = useSteps(2);
  return (
    <SlideBody
      header={<Header title="Pain Point: Waterfalls" />}
      className="px-8"
    >
      <div className="flex h-full justify-center">
        <ul>
          <li>Extremely common in REST - choose GraphQL!</li>
          <li>Not perfect - even with GraphQL</li>
          {currentStep > 0 && (
            <>
              <li>When Science fails - resort to ART</li>
              <li>
                Consider{" "}
                <a
                  className="hover:underline"
                  href="https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a"
                >
                  Skeleton Screens
                </a>{" "}
                <Emoji symbol="👉" label="finger pointing right" />
              </li>
              <li>
                Coming soon... <Emoji symbol="🤞" label="fingers crossed" />{" "}
                React Suspense for Data Fetching
              </li>
            </>
          )}
        </ul>
        <div
          className="flex-1 ml-8"
          style={{
            backgroundImage: `url('${
              currentStep > 0
                ? "/img/facebook-skeleton.png"
                : "/img/waterfall.jpg"
            }')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
          }}
        />
      </div>
    </SlideBody>
  );
}
