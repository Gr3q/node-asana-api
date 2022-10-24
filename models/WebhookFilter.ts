/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A WebhookFilter can be passed on creation of a webhook in order to filter the types of actions that trigger delivery of an [Event](/docs/tocS_Event)
 */
export type WebhookFilter = {
    /**
     * The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to `task`.
     */
    resource_type?: string;
    /**
     * The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the `resource_subtype` field on the resources themselves.
     */
    resource_subtype?: string;
    /**
     * The type of change on the **resource** to pass through the filter. For more information refer to `Event.action` in the [Event](/docs/tocS_Event) schema. This can be one of `changed`, `added`, `removed`, `deleted`, and `undeleted` depending on the nature of what has occurred on the resource.
     */
    action?: string;
    /**
     * *Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for `action` of type `changed`
     */
    fields?: Array<string>;
};

