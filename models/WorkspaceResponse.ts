/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkspaceCompact } from './WorkspaceCompact';

export type WorkspaceResponse = (WorkspaceCompact & {
    /**
     * The email domains that are associated with this workspace.
     */
    email_domains?: Array<string>;
    /**
     * Whether the workspace is an *organization*.
     */
    is_organization?: boolean;
});

