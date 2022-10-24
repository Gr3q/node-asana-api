/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldCompact } from './CustomFieldCompact';
import type { EnumOption } from './EnumOption';

export type CustomFieldBase = (CustomFieldCompact & {
    /**
     * [Opt In](/docs/input-output-options). The description of the custom field.
     */
    description?: string;
    /**
     * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
     */
    enum_options?: Array<EnumOption>;
    /**
     * Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
     * For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
     * The identifier format will always have a precision of 0.
     */
    precision?: number;
    /**
     * The format of this custom field.
     */
    format?: CustomFieldBase.format;
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
     */
    currency_code?: string | null;
    /**
     * This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
     */
    custom_label?: string | null;
    /**
     * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
     */
    custom_label_position?: CustomFieldBase.custom_label_position;
    /**
     * This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
     */
    readonly is_global_to_workspace?: boolean;
    /**
     * *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
     */
    has_notifications_enabled?: boolean;
});

export namespace CustomFieldBase {

    /**
     * The format of this custom field.
     */
    export enum format {
        CURRENCY = 'currency',
        IDENTIFIER = 'identifier',
        PERCENTAGE = 'percentage',
        CUSTOM = 'custom',
        NONE = 'none',
    }

    /**
     * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
     */
    export enum custom_label_position {
        PREFIX = 'prefix',
        SUFFIX = 'suffix',
    }


}

