/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { WorkspaceCompact } from './WorkspaceCompact';

export type OrganizationExportCompact = (AsanaResource & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * Download this URL to retreive the full export of the organization
     * in JSON format. It will be compressed in a gzip (.gz) container.
     *
     * *Note: May be null if the export is still in progress or
     * failed.  If present, this URL may only be valid for 1 hour from
     * the time of retrieval. You should avoid persisting this URL
     * somewhere and rather refresh on demand to ensure you do not keep
     * stale URLs.*
     */
    readonly download_url?: string | null;
    /**
     * The current state of the export.
     */
    readonly state?: OrganizationExportCompact.state;
    organization?: WorkspaceCompact;
});

export namespace OrganizationExportCompact {

    /**
     * The current state of the export.
     */
    export enum state {
        PENDING = 'pending',
        STARTED = 'started',
        FINISHED = 'finished',
        ERROR = 'error',
    }


}

