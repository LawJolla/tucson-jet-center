import withApollo from "next-with-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-link";
import ApolloClient from "apollo-client";
import fetch from "node-fetch";
// import { HttpLink } from "apollo-link-http"
import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "apollo-link-ws";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { getMainDefinition } from "apollo-utilities";
import { withClientState } from "apollo-link-state";

// import {
//   getAccessToken,
//   getIdToken,
//   isValidToken
// } from "../src/auth/auth0_token_functions";

const linkState = withClientState({
  cache,
  resolvers: {}
});

const cache = new InMemoryCache({});

export default withApollo(({ headers }) => {
  const ssrMode = !process.browser;
  // const renewAuth0Token = setContext((request, { renewToken }) => {
  //   if (
  //     !isValidToken(getAccessToken()) &&
  //     isValidToken(getIdToken()) &&
  //     renewToken
  //   ) {
  //     return renewToken();
  //   }
  //   return null;
  // });

  // const Authorization = () =>
  //   typeof window !== `undefined` && isValidToken(getAccessToken())
  //     ? `Bearer ${getAccessToken()}`
  //     : null;

  const Authorization = () => null;
  const httpLink = createUploadLink({
    uri: process.env.GRAPHQL_ENDPOINT,
    fetch
  });

  const wsLink =
    !ssrMode &&
    new WebSocketLink({
      uri: process.env.SUBSCRIPTIONS_ENDPOINT,
      options: {
        reconnect: true,
        connectionParams: Authorization() && { Authorization: Authorization() }
      }
    });

  const contextLink = setContext(async () => ({
    headers: {
      ...headers,
      Authorization: Authorization() || ``
    }
  }));

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(err =>
        console.log(`[GraphQL error]: Message: ${err.message}`)
      );
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const links = ApolloLink.from([
    // renewAuth0Token,
    errorLink,
    contextLink,
    linkState,
    httpLink
  ]);
  const link = wsLink
    ? split(
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        links
      )
    : links;

  // const cache = new InMemoryCache({
  //   dataIdFromObject: ({ id, __typename }) =>
  //     id && __typename ? `${__typename}:${id}` : null
  // })

  return new ApolloClient({ link, ssrMode, cache });
});

// export default withApollo(({ headers }) => {
//   const ssrMode = !process.browser
//   return ssrClient({ ssrMode, headers })
// })
