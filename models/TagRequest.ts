/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagBase } from './TagBase';

export type TagRequest = (TagBase & {
    /**
     * An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.
     */
    followers?: Array<string>;
    /**
     * Gid of an object.
     */
    workspace?: string;
});

