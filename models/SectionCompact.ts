/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type SectionCompact = (AsanaResource & {
    /**
     * The name of the section (i.e. the text displayed as the section header).
     */
    name?: string;
});

