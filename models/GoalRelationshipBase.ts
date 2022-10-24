/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoalCompact } from './GoalCompact';
import type { GoalRelationshipCompact } from './GoalRelationshipCompact';

export type GoalRelationshipBase = (GoalRelationshipCompact & {
    supported_goal?: GoalCompact;
});

