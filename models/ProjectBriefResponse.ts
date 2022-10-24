/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectBriefBase } from './ProjectBriefBase';
import type { ProjectCompact } from './ProjectCompact';

export type ProjectBriefResponse = (ProjectBriefBase & {
    /**
     * [Opt In](/docs/input-output-options). The plain text of the project brief.
     */
    text?: string;
    /**
     * A url that points directly to the object within Asana.
     */
    readonly permalink_url?: string;
    project?: ProjectCompact;
});

