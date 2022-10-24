/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type TeamCompact = (AsanaResource & {
    /**
     * The name of the team.
     */
    name?: string;
});

