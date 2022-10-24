/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaNamedResource } from './AsanaNamedResource';
import type { AsanaResource } from './AsanaResource';

export type WebhookCompact = (AsanaResource & {
    /**
     * If true, the webhook will send events - if false it is considered inactive and will not generate events.
     */
    readonly active?: boolean;
    resource?: AsanaNamedResource;
    /**
     * The URL to receive the HTTP POST.
     */
    readonly target?: string;
});

