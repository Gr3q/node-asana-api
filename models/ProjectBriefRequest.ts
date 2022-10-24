/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectBriefBase } from './ProjectBriefBase';

export type ProjectBriefRequest = (ProjectBriefBase & {
    /**
     * The plain text of the project brief. When writing to a project brief, you can specify either `html_text` (preferred) or `text`, but not both.
     */
    text?: string;
});

