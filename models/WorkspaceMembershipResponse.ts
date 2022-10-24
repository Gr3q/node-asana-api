/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserTaskListCompact } from './UserTaskListCompact';
import type { WorkspaceMembershipCompact } from './WorkspaceMembershipCompact';

export type WorkspaceMembershipResponse = (WorkspaceMembershipCompact & {
    /**
     * The user's "My Tasks" in the workspace.
     */
    readonly user_task_list?: UserTaskListCompact;
    /**
     * Reflects if this user still a member of the workspace.
     */
    readonly is_active?: boolean;
    /**
     * Reflects if this user is an admin of the workspace.
     */
    readonly is_admin?: boolean;
    /**
     * Reflects if this user is a guest of the workspace.
     */
    readonly is_guest?: boolean;
});

