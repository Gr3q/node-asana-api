/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagBase } from './TagBase';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type TagResponse = (TagBase & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * Array of users following this tag.
     */
    readonly followers?: Array<UserCompact>;
    workspace?: WorkspaceCompact;
    /**
     * A url that points directly to the object within Asana.
     */
    readonly permalink_url?: string;
});

