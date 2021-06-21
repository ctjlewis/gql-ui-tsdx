/**
 * Load from process.env. These variable names may vary depending on your setup
 * (i.e., you may need to use NEXT_PUBLIC_ prefixes for domains on NextJS).
 */
 const {
  AUTH0_DOMAIN,
  AUTH0_CLIENT,
  DGRAPH_DOMAIN,
  DGRAPH_CLIENT
} = process.env;

export const GQL_CONFIG = {
  auth0: {
    domain: AUTH0_DOMAIN ?? '',
    clientKey: AUTH0_CLIENT ?? ''
  },
  dgraph: {
    domain: DGRAPH_DOMAIN ?? '',
    clientKey: DGRAPH_CLIENT ?? ''
  }
}
