/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldCompact } from './CustomFieldCompact';
import type { CustomFieldSettingResponse } from './CustomFieldSettingResponse';
import type { PortfolioBase } from './PortfolioBase';
import type { StatusUpdateCompact } from './StatusUpdateCompact';
import type { UserCompact } from './UserCompact';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type PortfolioResponse = (PortfolioBase & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    created_by?: UserCompact;
    /**
     * Array of custom field settings applied to the portfolio.
     */
    custom_field_settings?: Array<CustomFieldSettingResponse>;
    /**
     * The latest `status_update` posted to this portfolio.
     */
    current_status_update?: StatusUpdateCompact | null;
    /**
     * The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD.
     */
    due_on?: string | null;
    /**
     * Array of Custom Fields.
     */
    custom_fields?: Array<CustomFieldCompact>;
    readonly members?: Array<UserCompact>;
    owner?: UserCompact;
    /**
     * The day on which work for this portfolio begins, or null if the portfolio has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
     */
    start_on?: string | null;
    workspace?: WorkspaceCompact;
    /**
     * A url that points directly to the object within Asana.
     */
    readonly permalink_url?: string;
    /**
     * True if the portfolio is public to its workspace members.
     */
    public?: boolean;
});

