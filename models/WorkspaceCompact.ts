/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type WorkspaceCompact = (AsanaResource & {
    /**
     * The name of the workspace.
     */
    name?: string;
});

