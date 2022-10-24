/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A user identification object for specification with the addUser/removeUser endpoints.
 */
export type WorkspaceRemoveUserRequest = {
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a user.
     */
    user?: string;
};

