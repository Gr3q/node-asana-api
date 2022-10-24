/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectBase } from './ProjectBase';

export type ProjectRequest = (ProjectBase & {
    /**
     * An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object.
     */
    custom_fields?: Record<string, string>;
    /**
     * *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.
     */
    followers?: string;
    /**
     * The current owner of the project, may be null.
     */
    owner?: string | null;
    /**
     * The team that this project is shared with.
     */
    team?: string;
});

