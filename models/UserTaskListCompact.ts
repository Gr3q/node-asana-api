/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type UserTaskListCompact = (AsanaResource & {
    /**
     * The name of the user task list.
     */
    name?: string;
    /**
     * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
     */
    readonly owner?: UserCompact;
    /**
     * The workspace in which the user task list is located.
     */
    readonly workspace?: WorkspaceCompact;
});

