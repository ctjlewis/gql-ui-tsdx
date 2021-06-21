/**
 * General
 */
export const PRODUCTION = process.env.NODE_ENV === 'production';
export const HOMEPAGE = PRODUCTION ? '' : 'localhost:3000';

/**
 * Auth0
 */
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN ?? '';
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT ?? '';

/**
 * Dgraph
 */
export const SLASH_IDENTIFIER = process.env.DGRAPH_DOMAIN ?? '';
export const SLASH_CLIENT_KEY = process.env.DGRAPH_CLIENT ?? '';
