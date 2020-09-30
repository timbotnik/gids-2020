import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import { Slideshow } from "./app/Slideshow";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Demos } from "app/Demos";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/slides">
            <Slideshow />
          </Route>
          <Route path="/demos">
            <Demos />
          </Route>
          <Route exact path="/">
            <Redirect to="/slides" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
