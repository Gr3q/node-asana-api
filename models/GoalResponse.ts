/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoalBase } from './GoalBase';
import type { GoalMetricBase } from './GoalMetricBase';
import type { Like } from './Like';
import type { StatusUpdateCompact } from './StatusUpdateCompact';
import type { TeamCompact } from './TeamCompact';
import type { TimePeriodCompact } from './TimePeriodCompact';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type GoalResponse = (GoalBase & {
    /**
     * Array of likes for users who have liked this goal.
     */
    readonly likes?: Array<Like>;
    /**
     * The number of users who have liked this goal.
     */
    readonly num_likes?: number;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization.
     */
    team?: TeamCompact;
    workspace?: WorkspaceCompact;
    /**
     * Array of users who are members of this goal.
     */
    followers?: Array<UserCompact>;
    time_period?: TimePeriodCompact;
    metric?: GoalMetricBase;
    owner?: UserCompact;
    /**
     * The latest `status_update` posted to this goal.
     */
    current_status_update?: StatusUpdateCompact | null;
});

