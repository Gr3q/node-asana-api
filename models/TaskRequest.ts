/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskBase } from './TaskBase';

export type TaskRequest = (TaskBase & {
    /**
     * Gid of a user.
     */
    assignee?: string | null;
    /**
     * The *assignee section* is a subdivision of a project that groups tasks together in the assignee's "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."
     * The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's "My Tasks" list.
     */
    assignee_section?: string | null;
    /**
     * An object where each key is a Custom Field GID and each value is an enum GID, string, number, object, or array.
     */
    custom_fields?: Record<string, string>;
    /**
     * *Create-Only* An array of strings identifying users. These can either be the string "me", an email, or the gid of a user. In order to change followers on an existing task use `addFollowers` and `removeFollowers`.
     */
    followers?: Array<string>;
    /**
     * Gid of a task.
     */
    parent?: string | null;
    /**
     * *Create-Only* Array of project gids. In order to change projects on an existing task use `addProject` and `removeProject`.
     */
    projects?: Array<string>;
    /**
     * *Create-Only* Array of tag gids. In order to change tags on an existing task use `addTag` and `removeTag`.
     */
    tags?: Array<string>;
    /**
     * Gid of a workspace.
     */
    workspace?: string;
});

