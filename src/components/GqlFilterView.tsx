import { gql, useApolloClient } from "@apollo/client";
import React, { FC, useEffect } from "react";
import { SLASH_IDENTIFIER } from "../lib/globals";

const query = gql`
  query {
    getUser(username: "tester") {
      numFollowers
      numFollowing
    }
  }
`;

/**
 * Open views into the database objects matching the filter.
 */
export const GqlFilterView: FC = ({ children }) => {
  const client = useApolloClient();
  useEffect(
    () => {
      (async () => {
        const result = await client.query({
          query
        });
        console.log(result)
      })()
    }, 
    []
  );
  return (
    <div>
      <code>{SLASH_IDENTIFIER}</code>
      {children}
    </div>
  );
}