/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A set of dependent tasks.
 */
export type ModifyDependentsRequest = {
    /**
     * An array of task gids that are dependents of the given task.
     */
    dependents?: Array<string>;
};

