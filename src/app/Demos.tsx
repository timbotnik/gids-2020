import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { App as WaterfallQueriesApp } from "./demos/queries/App";
import { App as WaterfallFragmentsApp } from "./demos/fragments/App";
import { App as WaterfallOptUiApp } from "./demos/optui/App";
import { App as WaterfallErrorsApp } from "./demos/errors/App";

export function Demos() {
  return (
    <Switch>
      <Route path="/demos/queries" exact>
        <WaterfallQueriesApp />
      </Route>
      <Route path="/demos/fragments" exact>
        <WaterfallFragmentsApp />
      </Route>
      <Route path="/demos/optui" exact>
        <WaterfallOptUiApp />
      </Route>
      <Route path="/demos/errors" exact>
        <WaterfallErrorsApp />
      </Route>
      <Route path="/demos" exact>
        <Redirect to={`/demos/queries`} />
      </Route>
    </Switch>
  );
}
