import React, { FC } from "react";

/**
 * Read a piece of data from the backend and display it in a component.
 *
 * @returns A component generated with the live data.
 */
export const GqlIdView: FC = ({ children }) => {
  return <div>{children}</div>;
}