/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldResponse } from './CustomFieldResponse';
import type { ProjectCompact } from './ProjectCompact';
import type { SectionCompact } from './SectionCompact';
import type { TagCompact } from './TagCompact';
import type { TaskBase } from './TaskBase';
import type { TaskCompact } from './TaskCompact';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type TaskResponse = (TaskBase & {
    assignee?: UserCompact | null;
    assignee_section?: SectionCompact | null;
    /**
     * Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an `enum_value` property for custom fields of type `enum`, a `text_value` property for custom fields of type `text`, and so on. Please note that the `gid` returned on each custom field value *is identical* to the `gid` of the custom field, which allows referencing the custom field metadata through the `/custom_fields/custom_field-gid` endpoint.
     */
    readonly custom_fields?: Array<CustomFieldResponse>;
    /**
     * Array of users following this task.
     */
    readonly followers?: Array<UserCompact>;
    parent?: TaskCompact;
    /**
     * *Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints.
     */
    readonly projects?: Array<ProjectCompact>;
    /**
     * Array of tags associated with this task. In order to change tags on an existing task use `addTag` and `removeTag`.
     */
    readonly tags?: Array<TagCompact>;
    workspace?: WorkspaceCompact;
    /**
     * A url that points directly to the object within Asana.
     */
    readonly permalink_url?: string;
});

