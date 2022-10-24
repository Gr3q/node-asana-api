/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumOption } from './EnumOption';

export type EnumOptionRequest = (EnumOption & {
    /**
     * An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
     */
    insert_before?: string;
    /**
     * An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
     */
    insert_after?: string;
});

