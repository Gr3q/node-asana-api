/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type ProjectStatusCompact = (AsanaResource & {
    /**
     * The title of the project status update.
     */
    title?: string;
});

