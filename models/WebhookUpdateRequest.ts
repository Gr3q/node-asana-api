/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookFilter } from './WebhookFilter';

export type WebhookUpdateRequest = {
    /**
     * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
     */
    filters?: Array<WebhookFilter>;
};

