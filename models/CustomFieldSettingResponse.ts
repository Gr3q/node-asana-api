/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldResponse } from './CustomFieldResponse';
import type { CustomFieldSettingCompact } from './CustomFieldSettingCompact';
import type { ProjectCompact } from './ProjectCompact';

export type CustomFieldSettingResponse = (CustomFieldSettingCompact & {
    project?: ProjectCompact;
    /**
     * `is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.
     */
    readonly is_important?: boolean;
    parent?: ProjectCompact;
    custom_field?: CustomFieldResponse;
});

