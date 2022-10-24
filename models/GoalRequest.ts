/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoalBase } from './GoalBase';

export type GoalRequest = (GoalBase & {
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization.
     */
    team?: string | null;
    /**
     * The `gid` of a workspace.
     */
    workspace?: string;
    followers?: Array<string>;
    /**
     * The `gid` of a time period.
     */
    time_period?: string | null;
    /**
     * The `gid` of a user.
     */
    owner?: string | null;
});

