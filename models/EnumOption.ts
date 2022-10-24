/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type EnumOption = (AsanaResource & {
    /**
     * The name of the enum option.
     */
    name?: string;
    /**
     * Whether or not the enum option is a selectable value for the custom field.
     */
    enabled?: boolean;
    /**
     * The color of the enum option. Defaults to ‘none’.
     */
    color?: string;
});

