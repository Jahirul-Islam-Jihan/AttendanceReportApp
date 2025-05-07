import React from "react";
import MainNavigator from "./Navigation/Navigator";
import { ApolloProvider } from "@apollo/client";
import client from "./API/configs/apolloClient";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainNavigator />
    </ApolloProvider>
  );
}
