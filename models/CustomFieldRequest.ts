/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldBase } from './CustomFieldBase';

export type CustomFieldRequest = (CustomFieldBase & {
    /**
     * *Create-Only* The workspace to create a custom field in.
     */
    workspace: string;
    /**
     * *Conditional*. Only relevant for custom fields of type `people`. This array of user GIDs reflects the users to be written to a `people` custom field. Note that *write* operations will replace existing users (if any) in the custom field with the users specified in this array.
     */
    people_value?: Array<string>;
});

