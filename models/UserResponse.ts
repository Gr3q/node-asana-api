/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBaseResponse } from './UserBaseResponse';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type UserResponse = (UserBaseResponse & {
    /**
     * Workspaces and organizations this user may access.
     * Note\: The API will only return workspaces and organizations that also contain the authenticated user.
     */
    readonly workspaces?: Array<WorkspaceCompact>;
});

