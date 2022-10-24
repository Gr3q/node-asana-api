/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { UserCompact } from './UserCompact';

export type ProjectMembershipCompact = (AsanaResource & {
    user?: UserCompact;
});

