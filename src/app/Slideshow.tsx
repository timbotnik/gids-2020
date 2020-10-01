import React from "react";
import { Deck, SlideDefinition } from "../components/Deck";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./slideshow/Footer";

const slides: SlideDefinition[] = [
  {
    slug: "cover",
    Slide: React.lazy(() => import("./slideshow/Cover")),
  },
  {
    slug: "agenda",
    Slide: React.lazy(() => import("./slideshow/Agenda")),
  },
  {
    slug: "intro",
    Slide: React.lazy(() => import("./slideshow/Intro")),
  },
  {
    slug: "ethics",
    Slide: React.lazy(() => import("./slideshow/Ethics")),
  },
  {
    slug: "ddas",
    Slide: React.lazy(() => import("./slideshow/DDAs")),
  },
  {
    slug: "dda-tech",
    Slide: React.lazy(() => import("./slideshow/DDATech")),
  },
  {
    slug: "component-tree",
    Slide: React.lazy(() => import("./slideshow/ComponentTree")),
  },
  {
    slug: "loading",
    Slide: React.lazy(() => import("./slideshow/Loading")),
  },
  {
    slug: "component-data-tree",
    Slide: React.lazy(() => import("./slideshow/ComponentDataTree")),
  },
  {
    slug: "loading-pain",
    Slide: React.lazy(() => import("./slideshow/LoadingPain")),
  },
  {
    slug: "loading-fix-db",
    Slide: React.lazy(() => import("./slideshow/LoadingFix1")),
  },
  {
    slug: "loading-data-deps",
    Slide: React.lazy(() => import("./slideshow/LoadingDataDeps")),
  },
  {
    slug: "loading-queries-video",
    Slide: React.lazy(() => import("./slideshow/LoadingQueriesVideo")),
  },
  {
    slug: "loading-queries",
    Slide: React.lazy(() => import("./slideshow/LoadingQueries")),
  },
  {
    slug: "loading-fragments-video",
    Slide: React.lazy(() => import("./slideshow/LoadingFragmentsVideo")),
  },
  {
    slug: "loading-fragments",
    Slide: React.lazy(() => import("./slideshow/LoadingFragments")),
  },
  {
    slug: "tradeoffs-queries-v-fragments",
    Slide: React.lazy(() => import("./slideshow/QueriesVFragments")),
  },
  {
    slug: "waterfalls",
    Slide: React.lazy(() => import("./slideshow/Waterfalls")),
  },
  {
    slug: "reactivity",
    Slide: React.lazy(() => import("./slideshow/Reactivity")),
  },
  {
    slug: "mutation-video",
    Slide: React.lazy(() => import("./slideshow/MutationVideo")),
  },
  {
    slug: "mutation",
    Slide: React.lazy(() => import("./slideshow/Mutation")),
  },
  {
    slug: "mutation-loading-video",
    Slide: React.lazy(() => import("./slideshow/MutationLoadingVideo")),
  },
  {
    slug: "mutation-loading",
    Slide: React.lazy(() => import("./slideshow/MutationLoading")),
  },
  {
    slug: "mutation-optui-video",
    Slide: React.lazy(() => import("./slideshow/MutationOptUiVideo")),
  },
  {
    slug: "mutation-optui",
    Slide: React.lazy(() => import("./slideshow/MutationOptUi")),
  },
  {
    slug: "errors-inline-video",
    Slide: React.lazy(() => import("./slideshow/ErrorsInlineVideo")),
  },
  {
    slug: "error-patterns",
    Slide: React.lazy(() => import("./slideshow/ErrorPatterns")),
  },
  {
    slug: "error-banner-video",
    Slide: React.lazy(() => import("./slideshow/ErrorBannerVideo")),
  },
  {
    slug: "tools",
    Slide: React.lazy(() => import("./slideshow/Tools")),
  },
  {
    slug: "tools-storybook",
    Slide: React.lazy(() => import("./slideshow/ToolsStorybook")),
  },
  {
    slug: "tools-chromatic",
    Slide: React.lazy(() => import("./slideshow/ToolsChromatic")),
  },
  {
    slug: "tools-studio",
    Slide: React.lazy(() => import("./slideshow/ToolsStudio")),
  },
  {
    slug: "graphql",
    Slide: React.lazy(() => import("./slideshow/GraphQL")),
  },
  {
    slug: "references",
    Slide: React.lazy(() => import("./slideshow/References")),
  },
];

export function Slideshow() {
  return (
    <Switch>
      <Route path="/slides/:slug">
        <Deck slides={slides} footer={<Footer />} />
      </Route>
      <Route path="/slides" exact>
        <Redirect to={`/slides/${slides[0].slug}`} />
      </Route>
    </Switch>
  );
}
