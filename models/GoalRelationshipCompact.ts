/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { ProjectCompact } from './ProjectCompact';

export type GoalRelationshipCompact = (AsanaResource & {
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    readonly resource_subtype?: GoalRelationshipCompact.resource_subtype;
    supporting_resource?: ProjectCompact;
    /**
     * The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.
     */
    contribution_weight?: number;
});

export namespace GoalRelationshipCompact {

    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    export enum resource_subtype {
        SUBGOAL = 'subgoal',
        SUPPORTING_WORK = 'supporting_work',
    }


}

