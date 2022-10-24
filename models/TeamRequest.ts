/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamCompact } from './TeamCompact';

export type TeamRequest = (TeamCompact & {
    /**
     * The description of the team.
     *
     */
    description?: string;
    /**
     * The description of the team with formatting as HTML.
     *
     */
    html_description?: string;
    /**
     * The organization/workspace the team belongs to. This must be the same organization you are in and cannot be changed once set.
     *
     */
    organization?: string;
    /**
     * The visibility of the team to users in the same organization
     *
     */
    visibility?: TeamRequest.visibility;
});

export namespace TeamRequest {

    /**
     * The visibility of the team to users in the same organization
     *
     */
    export enum visibility {
        SECRET = 'secret',
        REQUEST_TO_JOIN = 'request_to_join',
        PUBLIC = 'public',
    }


}

