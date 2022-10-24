/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type StatusUpdateCompact = (AsanaResource & {
    /**
     * The title of the status update.
     */
    title?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * The `resource_subtype`s for `status` objects represent the type of their parent.
     */
    readonly resource_subtype?: StatusUpdateCompact.resource_subtype;
});

export namespace StatusUpdateCompact {

    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * The `resource_subtype`s for `status` objects represent the type of their parent.
     */
    export enum resource_subtype {
        PROJECT_STATUS_UPDATE = 'project_status_update',
        PORTFOLIO_STATUS_UPDATE = 'portfolio_status_update',
        GOAL_STATUS_UPDATE = 'goal_status_update',
    }


}

