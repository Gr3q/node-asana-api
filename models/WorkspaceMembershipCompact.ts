/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type WorkspaceMembershipCompact = (AsanaResource & {
    user?: UserCompact;
    workspace?: WorkspaceCompact;
});

