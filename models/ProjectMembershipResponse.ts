/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectCompact } from './ProjectCompact';
import type { ProjectMembershipCompact } from './ProjectMembershipCompact';

export type ProjectMembershipResponse = (ProjectMembershipCompact & {
    /**
     * [Opt In](/docs/input-output-options). The project the user is a member of.
     */
    project?: ProjectCompact;
    /**
     * Whether the user has full access to the project or has comment-only access.
     */
    readonly write_access?: ProjectMembershipResponse.write_access;
});

export namespace ProjectMembershipResponse {

    /**
     * Whether the user has full access to the project or has comment-only access.
     */
    export enum write_access {
        FULL_WRITE = 'full_write',
        COMMENT_ONLY = 'comment_only',
    }


}

