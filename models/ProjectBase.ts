/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldSettingResponse } from './CustomFieldSettingResponse';
import type { ProjectCompact } from './ProjectCompact';
import type { ProjectStatusResponse } from './ProjectStatusResponse';
import type { StatusUpdateCompact } from './StatusUpdateCompact';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type ProjectBase = (ProjectCompact & {
    /**
     * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
     */
    archived?: boolean;
    /**
     * Color of the project.
     */
    color?: ProjectBase.color | null;
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * *Deprecated: new integrations should prefer the `current_status_update` resource.*
     */
    current_status?: ProjectStatusResponse | null;
    /**
     * The latest `status_update` posted to this project.
     */
    current_status_update?: StatusUpdateCompact | null;
    /**
     * Array of Custom Field Settings (in compact form).
     */
    readonly custom_field_settings?: Array<CustomFieldSettingResponse>;
    /**
     * The default view (list, board, calendar, or timeline) of a project.
     */
    default_view?: ProjectBase.default_view;
    /**
     * *Deprecated: new integrations should prefer the `due_on` field.*
     */
    due_date?: string | null;
    /**
     * The day on which this project is due. This takes a date with format YYYY-MM-DD.
     */
    due_on?: string | null;
    /**
     * [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
     */
    html_notes?: string;
    /**
     * [Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint instead (more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the project is a template.
     */
    is_template?: boolean;
    /**
     * Array of users who are members of this project.
     */
    readonly members?: Array<UserCompact>;
    /**
     * The time at which this project was last modified.
     * *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
     */
    readonly modified_at?: string;
    /**
     * Free-form textual information associated with the project (ie., its description).
     */
    notes?: string;
    /**
     * True if the project is public to its team.
     */
    public?: boolean;
    /**
     * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
     */
    start_on?: string | null;
    workspace?: WorkspaceCompact;
});

export namespace ProjectBase {

    /**
     * Color of the project.
     */
    export enum color {
        DARK_PINK = 'dark-pink',
        DARK_GREEN = 'dark-green',
        DARK_BLUE = 'dark-blue',
        DARK_RED = 'dark-red',
        DARK_TEAL = 'dark-teal',
        DARK_BROWN = 'dark-brown',
        DARK_ORANGE = 'dark-orange',
        DARK_PURPLE = 'dark-purple',
        DARK_WARM_GRAY = 'dark-warm-gray',
        LIGHT_PINK = 'light-pink',
        LIGHT_GREEN = 'light-green',
        LIGHT_BLUE = 'light-blue',
        LIGHT_RED = 'light-red',
        LIGHT_TEAL = 'light-teal',
        LIGHT_BROWN = 'light-brown',
        LIGHT_ORANGE = 'light-orange',
        LIGHT_PURPLE = 'light-purple',
        LIGHT_WARM_GRAY = 'light-warm-gray',
    }

    /**
     * The default view (list, board, calendar, or timeline) of a project.
     */
    export enum default_view {
        LIST = 'list',
        BOARD = 'board',
        CALENDAR = 'calendar',
        TIMELINE = 'timeline',
    }


}

