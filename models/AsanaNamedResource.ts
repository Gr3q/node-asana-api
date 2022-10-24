/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type AsanaNamedResource = (AsanaResource & {
    /**
     * The name of the object.
     */
    name?: string;
});

