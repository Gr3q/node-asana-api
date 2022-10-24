/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type TaskCompact = (AsanaResource & {
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resource_subtype?: TaskCompact.resource_subtype;
});

export namespace TaskCompact {

    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    export enum resource_subtype {
        DEFAULT_TASK = 'default_task',
        MILESTONE = 'milestone',
        SECTION = 'section',
        APPROVAL = 'approval',
    }


}

