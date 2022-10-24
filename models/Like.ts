/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserCompact } from './UserCompact';

/**
 * An object to represent a user's like.
 */
export type Like = {
    /**
     * Globally unique identifier of the object, as a string.
     */
    readonly gid?: string;
    user?: UserCompact;
};

