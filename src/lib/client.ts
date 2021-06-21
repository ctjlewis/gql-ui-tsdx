import { SLASH_IDENTIFIER, PRODUCTION, SLASH_CLIENT_KEY } from './globals';
import { useEffect, useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const DEV_ENABLED = false;

let token: string = '';

const ENDPOINT =
  !PRODUCTION && DEV_ENABLED
    ? 'http://localhost:8080'
    : `https://${SLASH_IDENTIFIER}.aws.cloud.dgraph.io`;

export const initializeGqlClient = (initialState: object | null = null) => {
  /**
   * Clients sign requests with the X-Auth-Token authentication header.
   */
  const authHeaders: { 'X-Auth-Token'?: string, 'Dg-Auth'?: string } = {};
  if (token) {
    authHeaders['X-Auth-Token'] = token;
    console.log('Token added to Apollo.');
    console.log({ authHeaders });
  }
  /**
   * Set Dgraph API key.
   */
  if (PRODUCTION) {
    authHeaders['Dg-Auth'] = SLASH_CLIENT_KEY;
  }
  /**
   * Concatenate the authentication and link headers.
   */
  const httpLink = new HttpLink({
    uri: `${ENDPOINT}/graphql`,
    // fetchOptions: {
    //   mode: 'no-cors'
    // }
  });
  const authLink = setContext(
    (_, { headers }) => ({
      headers: {
        ...headers,
        ...authHeaders,
      }
    })
  );
  /**
   * If useApollo calls this function, it means the token or authentication
   * status has changed, so create a new client.
   */
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    ssrMode: typeof window === 'undefined', // set to true for SSR
    connectToDevTools: !PRODUCTION,
    cache: new InMemoryCache(),
  });
  /**
   * If your page has Next.js data fetching methods that use Apollo Client, the
   * initial state gets hydrated here.
   */
  if (initialState) {
    /**
     * Get existing cache, loaded during client side data fetching
     */
    const existingCache = apolloClient.extract();
    /**
     * Restore the cache using the data passed from getStaticProps /
     * getServerSideProps combined with the existing cached data.
     */
    apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  return apolloClient;
}

export const useGqlClient = (initialState = {}) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  console.log('useGqlClient', { isAuthenticated })
  /**
   * Update the global token when the authentication status changes.
   */
  useEffect(
    () => {
      console.info('useGqlClient');
      (async () => {
        const _token = await getIdTokenClaims();
        token = _token?.__raw;
      })();
    },
    [isAuthenticated],
  );
  /**
   * When the initial state or token changes, re-initialize the Apollo client.
   */
  return useMemo(
    () => initializeGqlClient(initialState),
    [token]
  );
}