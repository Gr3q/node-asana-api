/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectBriefCompact } from './ProjectBriefCompact';

export type ProjectBriefBase = (ProjectBriefCompact & {
    /**
     * The title of the project brief.
     */
    title?: string;
    /**
     * HTML formatted text for the project brief.
     */
    html_text?: string;
});

