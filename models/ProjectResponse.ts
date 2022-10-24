/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldCompact } from './CustomFieldCompact';
import type { ProjectBase } from './ProjectBase';
import type { ProjectBriefCompact } from './ProjectBriefCompact';
import type { ProjectTemplateCompact } from './ProjectTemplateCompact';
import type { TeamCompact } from './TeamCompact';
import type { UserCompact } from './UserCompact';

export type ProjectResponse = (ProjectBase & {
    /**
     * Array of Custom Fields.
     */
    readonly custom_fields?: Array<CustomFieldCompact>;
    /**
     * True if the project is currently marked complete, false if not.
     */
    readonly completed?: boolean;
    /**
     * The time at which this project was completed, or null if the project is not completed.
     */
    readonly completed_at?: string | null;
    /**
     * The user that marked this project complete, or null if the project is not completed.
     */
    readonly completed_by?: UserCompact | null;
    /**
     * Array of users following this project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.
     */
    readonly followers?: Array<UserCompact>;
    /**
     * The current owner of the project, may be null.
     */
    owner?: UserCompact | null;
    team?: TeamCompact;
    /**
     * The icon for a project.
     */
    icon?: ProjectResponse.icon | null;
    /**
     * A url that points directly to the object within Asana.
     */
    readonly permalink_url?: string;
    project_brief?: ProjectBriefCompact;
    created_from_template?: ProjectTemplateCompact;
});

export namespace ProjectResponse {

    /**
     * The icon for a project.
     */
    export enum icon {
        LIST = 'list',
        BOARD = 'board',
        TIMELINE = 'timeline',
        CALENDAR = 'calendar',
        ROCKET = 'rocket',
        PEOPLE = 'people',
        GRAPH = 'graph',
        STAR = 'star',
        BUG = 'bug',
        LIGHT_BULB = 'light_bulb',
        GLOBE = 'globe',
        GEAR = 'gear',
        NOTEBOOK = 'notebook',
        COMPUTER = 'computer',
        CHECK = 'check',
        TARGET = 'target',
        HTML = 'html',
        MEGAPHONE = 'megaphone',
        CHAT_BUBBLES = 'chat_bubbles',
        BRIEFCASE = 'briefcase',
        PAGE_LAYOUT = 'page_layout',
        MOUNTAIN_FLAG = 'mountain_flag',
        PUZZLE = 'puzzle',
        PRESENTATION = 'presentation',
        LINE_AND_SYMBOLS = 'line_and_symbols',
        SPEED_DIAL = 'speed_dial',
        RIBBON = 'ribbon',
        SHOE = 'shoe',
        SHOPPING_BASKET = 'shopping_basket',
        MAP = 'map',
        TICKET = 'ticket',
        COINS = 'coins',
    }


}

