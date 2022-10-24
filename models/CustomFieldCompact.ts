/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { EnumOption } from './EnumOption';

export type CustomFieldCompact = (AsanaResource & {
    /**
     * The name of the custom field.
     */
    name?: string;
    /**
     * The type of the custom field. Must be one of the given values.
     *
     */
    resource_subtype?: CustomFieldCompact.resource_subtype;
    /**
     * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
     *
     */
    readonly type?: CustomFieldCompact.type;
    /**
     * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
     */
    enum_options?: Array<EnumOption>;
    /**
     * *Conditional*. Determines if the custom field is enabled or not.
     */
    enabled?: boolean;
    /**
     * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
     */
    date_value?: {
        /**
         * A string representing the date in YYYY-MM-DD format.
         */
        date?: string;
        /**
         * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
         */
        date_time?: string;
    };
    enum_value?: EnumOption;
    /**
     * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
     */
    multi_enum_values?: Array<EnumOption>;
    /**
     * *Conditional*. This number is the value of a `number` custom field.
     */
    number_value?: number;
    /**
     * *Conditional*. This string is the value of a `text` custom field.
     */
    text_value?: string;
    /**
     * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
     */
    readonly display_value?: string | null;
});

export namespace CustomFieldCompact {

    /**
     * The type of the custom field. Must be one of the given values.
     *
     */
    export enum resource_subtype {
        TEXT = 'text',
        ENUM = 'enum',
        MULTI_ENUM = 'multi_enum',
        NUMBER = 'number',
        DATE = 'date',
        PEOPLE = 'people',
    }

    /**
     * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
     *
     */
    export enum type {
        TEXT = 'text',
        ENUM = 'enum',
        MULTI_ENUM = 'multi_enum',
        NUMBER = 'number',
    }


}

