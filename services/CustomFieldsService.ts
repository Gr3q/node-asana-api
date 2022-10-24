/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldRequest } from '../models/CustomFieldRequest';
import type { CustomFieldResponse } from '../models/CustomFieldResponse';
import type { EmptyResponse } from '../models/EmptyResponse';
import type { EnumOption } from '../models/EnumOption';
import type { EnumOptionInsertRequest } from '../models/EnumOptionInsertRequest';
import type { EnumOptionRequest } from '../models/EnumOptionRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomFieldsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a custom field
     * Creates a new custom field in a workspace. Every custom field is required
     * to be created in a specific workspace, and this workspace cannot be
     * changed once set.
     *
     * A custom field’s name must be unique within a workspace and not conflict
     * with names of existing task properties such as `Due Date` or `Assignee`.
     * A custom field’s type must be one of `text`, `enum`, `multi_enum`, `number`,
     * `date`, or `people`.
     *
     * Returns the full record of the newly created custom field.
     * @returns any Custom field successfully created.
     * @throws ApiError
     */
    public createCustomField({
        optPretty,
        optFields,
        limit,
        offset,
        requestBody,
    }: {
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
        /**
         * The custom field object to create.
         */
        requestBody?: {
            data?: CustomFieldRequest;
        },
    }): CancelablePromise<{
        data?: CustomFieldResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/custom_fields',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get a custom field
     * Get the complete definition of a custom field’s metadata.
     *
     * Since custom fields can be defined for one of a number of types, and
     * these types have different data and behaviors, there are fields that are
     * relevant to a particular type. For instance, as noted above, enum_options
     * is only relevant for the enum type and defines the set of choices that
     * the enum could represent. The examples below show some of these
     * type-specific custom field definitions.
     * @returns any Successfully retrieved the complete definition of a custom field’s metadata.
     * @throws ApiError
     */
    public getCustomField({
        customFieldGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the custom field.
         */
        customFieldGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: CustomFieldResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/custom_fields/{custom_field_gid}',
            path: {
                'custom_field_gid': customFieldGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Update a custom field
     * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged
     * When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
     * A custom field’s `type` cannot be updated.
     * An enum custom field’s `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update `enum_options`.
     * Locked custom fields can only be updated by the user who locked the field.
     * Returns the complete updated custom field record.
     * @returns any The custom field was successfully updated.
     * @throws ApiError
     */
    public updateCustomField({
        customFieldGid,
        optPretty,
        optFields,
        requestBody,
    }: {
        /**
         * Globally unique identifier for the custom field.
         */
        customFieldGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * The custom field object with all updated properties.
         */
        requestBody?: {
            data?: CustomFieldRequest;
        },
    }): CancelablePromise<{
        data?: CustomFieldResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/custom_fields/{custom_field_gid}',
            path: {
                'custom_field_gid': customFieldGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Delete a custom field
     * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
     * Locked custom fields can only be deleted by the user who locked the field.
     * Returns an empty data record.
     * @returns any The custom field was successfully deleted.
     * @throws ApiError
     */
    public deleteCustomField({
        customFieldGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the custom field.
         */
        customFieldGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
    }): CancelablePromise<{
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/custom_fields/{custom_field_gid}',
            path: {
                'custom_field_gid': customFieldGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get a workspace's custom fields
     * Returns a list of the compact representation of all of the custom fields in a workspace.
     * @returns any Successfully retrieved all custom fields for the given workspace.
     * @throws ApiError
     */
    public getCustomFieldsForWorkspace({
        workspaceGid,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
    }): CancelablePromise<{
        data?: Array<CustomFieldResponse>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_gid}/custom_fields',
            path: {
                'workspace_gid': workspaceGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Create an enum option
     * Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 100 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.
     * Locked custom fields can only have enum options added by the user who locked the field.
     * Returns the full record of the newly created enum option.
     * @returns any Custom field enum option successfully created.
     * @throws ApiError
     */
    public createEnumOptionForCustomField({
        customFieldGid,
        optPretty,
        optFields,
        limit,
        offset,
        requestBody,
    }: {
        /**
         * Globally unique identifier for the custom field.
         */
        customFieldGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * Results per page.
         * The number of objects to return per page. The value must be between 1 and 100.
         */
        limit?: number,
        /**
         * Offset token.
         * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
         * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
         */
        offset?: string,
        /**
         * The enum option object to create.
         */
        requestBody?: {
            data?: EnumOptionRequest;
        },
    }): CancelablePromise<{
        data?: EnumOption;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/custom_fields/{custom_field_gid}/enum_options',
            path: {
                'custom_field_gid': customFieldGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Reorder a custom field's enum
     * Moves a particular enum option to be either before or after another specified enum option in the custom field.
     * Locked custom fields can only be reordered by the user who locked the field.
     * @returns any Custom field enum option successfully reordered.
     * @throws ApiError
     */
    public insertEnumOptionForCustomField({
        customFieldGid,
        optPretty,
        optFields,
        requestBody,
    }: {
        /**
         * Globally unique identifier for the custom field.
         */
        customFieldGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * The enum option object to create.
         */
        requestBody?: {
            data?: EnumOptionInsertRequest;
        },
    }): CancelablePromise<{
        data?: EnumOption;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/custom_fields/{custom_field_gid}/enum_options/insert',
            path: {
                'custom_field_gid': customFieldGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Update an enum option
     * Updates an existing enum option. Enum custom fields require at least one enabled enum option.
     * Locked custom fields can only be updated by the user who locked the field.
     * Returns the full record of the updated enum option.
     * @returns any Successfully updated the specified custom field enum.
     * @throws ApiError
     */
    public updateEnumOption({
        enumOptionGid,
        optPretty,
        optFields,
        requestBody,
    }: {
        /**
         * Globally unique identifier for the enum option.
         */
        enumOptionGid: string,
        /**
         * Provides “pretty” output.
         * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         */
        optPretty?: boolean,
        /**
         * Defines fields to return.
         * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
         * The id of included objects will always be returned, regardless of the field options.
         */
        optFields?: Array<string>,
        /**
         * The enum option object to update
         */
        requestBody?: {
            data?: EnumOptionRequest;
        },
    }): CancelablePromise<{
        data?: EnumOption;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/enum_options/{enum_option_gid}',
            path: {
                'enum_option_gid': enumOptionGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

}
