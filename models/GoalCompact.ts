/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { UserCompact } from './UserCompact';

export type GoalCompact = (AsanaResource & {
    /**
     * The name of the goal.
     */
    name?: string;
    owner?: UserCompact;
});

