/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { Like } from './Like';
import type { ProjectCompact } from './ProjectCompact';
import type { SectionCompact } from './SectionCompact';
import type { TaskCompact } from './TaskCompact';
import type { UserCompact } from './UserCompact';

export type TaskBase = (TaskCompact & {
    /**
     * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
     */
    approval_status?: TaskBase.approval_status;
    /**
     * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
     */
    assignee_status?: TaskBase.assignee_status;
    /**
     * True if the task is currently marked complete, false if not.
     */
    completed?: boolean;
    /**
     * The time at which this task was completed, or null if the task is incomplete.
     */
    readonly completed_at?: string | null;
    readonly completed_by?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * [Opt In](/docs/input-output-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
     */
    readonly dependencies?: Array<AsanaResource>;
    /**
     * [Opt In](/docs/input-output-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
     */
    readonly dependents?: Array<AsanaResource>;
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     */
    due_at?: string | null;
    /**
     * The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.
     */
    due_on?: string | null;
    /**
     * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
     * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
     */
    external?: {
        gid?: string;
        data?: string;
    };
    /**
     * [Opt In](/docs/input-output-options). The notes of the text with formatting as HTML.
     */
    html_notes?: string;
    /**
     * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
     */
    readonly hearted?: boolean;
    /**
     * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
     */
    readonly hearts?: Array<Like>;
    /**
     * [Opt In](/docs/input-output-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/docs/asana-sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
     */
    readonly is_rendered_as_separator?: boolean;
    /**
     * True if the task is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * Array of likes for users who have liked this task.
     */
    readonly likes?: Array<Like>;
    /**
     * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
     */
    readonly memberships?: Array<{
        project?: ProjectCompact;
        section?: SectionCompact;
    }>;
    /**
     * The time at which this task was last modified.
     *
     * *Note: This does not currently reflect any changes in
     * associations such as projects or comments that may have been
     * added or removed from the task.*
     */
    readonly modified_at?: string;
    /**
     * Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * Free-form textual information associated with the task (i.e. its description).
     */
    notes?: string;
    /**
     * *Deprecated - please use likes instead* The number of users who have hearted this task.
     */
    readonly num_hearts?: number;
    /**
     * The number of users who have liked this task.
     */
    readonly num_likes?: number;
    /**
     * [Opt In](/docs/input-output-options). The number of subtasks on this task.
     *
     */
    readonly num_subtasks?: number;
    /**
     * Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`.
     * *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
     */
    start_at?: string | null;
    /**
     * The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`.
     * *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
     */
    start_on?: string | null;
});

export namespace TaskBase {

    /**
     * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
     */
    export enum approval_status {
        PENDING = 'pending',
        APPROVED = 'approved',
        REJECTED = 'rejected',
        CHANGES_REQUESTED = 'changes_requested',
    }

    /**
     * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
     */
    export enum assignee_status {
        TODAY = 'today',
        UPCOMING = 'upcoming',
        LATER = 'later',
        NEW = 'new',
        INBOX = 'inbox',
    }


}

