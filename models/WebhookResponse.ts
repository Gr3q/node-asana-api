/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookCompact } from './WebhookCompact';
import type { WebhookFilter } from './WebhookFilter';

export type WebhookResponse = (WebhookCompact & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * The timestamp when the webhook last received an error when sending an event to the target.
     */
    readonly last_failure_at?: string;
    /**
     * The contents of the last error response sent to the webhook when attempting to deliver events to the target.
     */
    readonly last_failure_content?: string;
    /**
     * The timestamp when the webhook last successfully sent an event to the target.
     */
    readonly last_success_at?: string;
    /**
     * Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
     */
    filters?: Array<WebhookFilter>;
});

