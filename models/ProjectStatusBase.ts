/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectStatusCompact } from './ProjectStatusCompact';

export type ProjectStatusBase = (ProjectStatusCompact & {
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    html_text?: string;
    /**
     * The color associated with the status update.
     */
    color: ProjectStatusBase.color;
});

export namespace ProjectStatusBase {

    /**
     * The color associated with the status update.
     */
    export enum color {
        GREEN = 'green',
        YELLOW = 'yellow',
        RED = 'red',
        BLUE = 'blue',
    }


}

