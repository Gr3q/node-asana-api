/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectStatusBase } from './ProjectStatusBase';
import type { UserCompact } from './UserCompact';

export type ProjectStatusResponse = (ProjectStatusBase & {
    author?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    created_by?: UserCompact;
    /**
     * The time at which this project status was last modified.
     * *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
     */
    readonly modified_at?: string;
});

