/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamCompact } from './TeamCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type TeamResponse = (TeamCompact & {
    /**
     * [Opt In](/docs/input-output-options). The description of the team.
     *
     */
    description?: string;
    /**
     * [Opt In](/docs/input-output-options). The description of the team with formatting as HTML.
     *
     */
    html_description?: string;
    organization?: WorkspaceCompact;
    /**
     * A url that points directly to the object within Asana.
     */
    readonly permalink_url?: string;
    /**
     * The visibility of the team to users in the same organization
     *
     */
    visibility?: TeamResponse.visibility;
});

export namespace TeamResponse {

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

