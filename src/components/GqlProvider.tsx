/**
 * @fileoverview
 * This file exports a pre-configured ApolloProvider.
 */

import React, { Component, FC, ReactNode, useEffect } from "react";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { initializeGqlClient, useGqlClient } from "../lib/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, HOMEPAGE } from "../lib/globals";

let token: string = '';

const AuthenticatedApolloProvider: FC = ({ children }) => {
  const client = initializeGqlClient();
  const { isLoading, isAuthenticated, getIdTokenClaims } = useAuth0();
  console.log('AuthenticatedApolloProvider', { isLoading, isAuthenticated })

  /**
   * Update the global token when the authentication status changes.
   */
  //  useEffect(
  //   () => {
  //     console.info('AuthenticatedApolloProvider');
  //     (async () => {
  //       const _token = await getIdTokenClaims();
  //       token = _token?.__raw;
  //     })();
  //   },
  //   [isAuthenticated],
  // );

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

// class AuthenticatedApolloProviderTest extends Component {
//   client = initializeGqlClient();
//   children: ReactNode;
//   constructor({ children, ...props }) {
//     super({ children, ...props });
//     this.children = children;
//   }
//   render() {
//     return (
//       <ApolloProvider client={this.client}>
//         {this.children}
//       </ApolloProvider>
//     );
//   }
// }

const Test: FC = ({ children }) => {
  const client = useGqlClient();
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

interface ClientConfiguration {
  domain: string;
  clientKey: string;
}

interface GqlConfiguration {
  auth0: ClientConfiguration;
  dgraph: ClientConfiguration;
}

export const GqlProvider: FC<GqlConfiguration> = ({
  children,
  auth0,
  dgraph,
}) => {
  console.log('render gqlProvider')
  return (
    <Auth0Provider
      domain={auth0.domain} 
      clientId={auth0.clientKey} 
      redirectUri={HOMEPAGE}
    >
      <AuthenticatedApolloProvider>
        {children}
      </AuthenticatedApolloProvider>
    </Auth0Provider>
  );
}