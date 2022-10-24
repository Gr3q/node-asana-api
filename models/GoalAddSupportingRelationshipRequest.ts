/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoalAddSupportingRelationshipRequest = {
    /**
     * The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.
     */
    supporting_resource: string;
    /**
     * An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
     */
    insert_before?: string;
    /**
     * An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
     */
    insert_after?: string;
    /**
     * The weight that the supporting resource's progress will contribute to the supported goal's progress. This can only be 0 or 1.
     */
    contribution_weight?: number;
};

