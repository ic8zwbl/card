import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import fetch from "cross-fetch";
  import React from "react";
  
  const client = new ApolloClient({
    link: new HttpLink({
      fetch,
      uri: "http://localhost:8080/graphql",
    }),
    cache: new InMemoryCache(),
  });
  
  export const wrapRootElement = ({ element }) => {
    return <ApolloProvider client={client}>{element}</ApolloProvider>;
  };
  