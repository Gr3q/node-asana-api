/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like } from './Like';
import type { ProjectCompact } from './ProjectCompact';
import type { StatusUpdateBase } from './StatusUpdateBase';
import type { UserCompact } from './UserCompact';

export type StatusUpdateResponse = (StatusUpdateBase & {
    author?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    created_by?: UserCompact;
    /**
     * *Deprecated - please use liked instead* True if the status is hearted by the authorized user, false if not.
     */
    readonly hearted?: boolean;
    /**
     * *Deprecated - please use likes instead* Array of likes for users who have hearted this status.
     */
    readonly hearts?: Array<Like>;
    /**
     * True if the status is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * Array of likes for users who have liked this status.
     */
    readonly likes?: Array<Like>;
    /**
     * The time at which this project status was last modified.
     * *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the status.*
     */
    readonly modified_at?: string;
    /**
     * *Deprecated - please use likes instead* The number of users who have hearted this status.
     */
    readonly num_hearts?: number;
    /**
     * The number of users who have liked this status.
     */
    readonly num_likes?: number;
    parent?: ProjectCompact;
});

