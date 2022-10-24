/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateVariableCompact } from './DateVariableCompact';
import type { ProjectTemplateCompact } from './ProjectTemplateCompact';
import type { TeamCompact } from './TeamCompact';
import type { UserCompact } from './UserCompact';

export type ProjectTemplateBase = (ProjectTemplateCompact & {
    /**
     * Free-form textual information associated with the project template
     */
    description?: string;
    /**
     * The description of the project template with formatting as HTML.
     */
    html_description?: string;
    /**
     * True if the project template is public to its team.
     */
    public?: boolean;
    /**
     * The current owner of the project template, may be null.
     */
    owner?: UserCompact | null;
    team?: TeamCompact;
    /**
     * Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.
     */
    readonly requested_dates?: Array<DateVariableCompact>;
    /**
     * Color of the project template.
     */
    color?: ProjectTemplateBase.color | null;
});

export namespace ProjectTemplateBase {

    /**
     * Color of the project template.
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


}

