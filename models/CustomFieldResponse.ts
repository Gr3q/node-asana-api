/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldBase } from './CustomFieldBase';
import type { UserCompact } from './UserCompact';

export type CustomFieldResponse = (CustomFieldBase & {
    created_by?: UserCompact | null;
    /**
     * *Conditional*. Only relevant for custom fields of type `people`. This array of [compact user](/docs/user-compact) objects reflects the values of a `people` custom field.
     */
    people_value?: Array<UserCompact>;
});

