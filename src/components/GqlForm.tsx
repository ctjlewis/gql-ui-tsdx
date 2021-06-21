import React, { FC } from "react";

/**
 * A live GQL-powered form which loads existing values from the backend and
 * updates the field as necessary. Submitting will update a reference or create
 * a new one depending on the `method` value.
 * 
 * @returns A live form to the given database reference.
 */
export const GqlForm: FC = ({ children }) => (<div>{children}</div>);