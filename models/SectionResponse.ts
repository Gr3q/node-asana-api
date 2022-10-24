/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectCompact } from './ProjectCompact';
import type { SectionCompact } from './SectionCompact';

export type SectionResponse = (SectionCompact & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    project?: ProjectCompact;
    /**
     * *Deprecated - please use project instead*
     */
    readonly projects?: Array<ProjectCompact>;
});

