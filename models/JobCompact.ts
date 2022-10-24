/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { ProjectCompact } from './ProjectCompact';
import type { ProjectTemplateCompact } from './ProjectTemplateCompact';
import type { TaskCompact } from './TaskCompact';

export type JobCompact = (AsanaResource & {
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    readonly resource_subtype?: string;
    /**
     * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
     */
    readonly status?: JobCompact.status;
    new_project?: ProjectCompact;
    new_task?: TaskCompact;
    new_project_template?: ProjectTemplateCompact;
});

export namespace JobCompact {

    /**
     * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
     */
    export enum status {
        NOT_STARTED = 'not_started',
        IN_PROGRESS = 'in_progress',
        SUCCEEDED = 'succeeded',
        FAILED = 'failed',
    }


}

