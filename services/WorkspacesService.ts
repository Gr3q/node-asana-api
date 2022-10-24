/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBaseResponse } from '../models/UserBaseResponse';
import type { WorkspaceAddUserRequest } from '../models/WorkspaceAddUserRequest';
import type { WorkspaceCompact } from '../models/WorkspaceCompact';
import type { WorkspaceRemoveUserRequest } from '../models/WorkspaceRemoveUserRequest';
import type { WorkspaceResponse } from '../models/WorkspaceResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkspacesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get multiple workspaces
     * Returns the compact records for all workspaces visible to the authorized user.
     * @returns any Return all workspaces visible to the authorized user.
     * @throws ApiError
     */
    public getWorkspaces({
        optPretty,
        optFields,
        limit,
        offset,
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
    }): CancelablePromise<{
        data?: Array<WorkspaceCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces',
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
     * Get a workspace
     * Returns the full workspace record for a single workspace.
     * @returns any Return the full workspace record.
     * @throws ApiError
     */
    public getWorkspace({
        workspaceGid,
        optPretty,
        optFields,
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
    }): CancelablePromise<{
        data?: WorkspaceResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_gid}',
            path: {
                'workspace_gid': workspaceGid,
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
     * Update a workspace
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
     * Currently the only field that can be modified for a workspace is its name.
     * Returns the complete, updated workspace record.
     * @returns any Update for the workspace was successful.
     * @throws ApiError
     */
    public updateWorkspace({
        workspaceGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * The workspace object with all updated properties.
         */
        requestBody: {
            data?: WorkspaceCompact;
        },
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
        data?: WorkspaceResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/workspaces/{workspace_gid}',
            path: {
                'workspace_gid': workspaceGid,
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
     * Add a user to a workspace or organization
     * Add a user to a workspace or organization.
     * The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
     * @returns any The user was added successfully to the workspace or organization.
     * @throws ApiError
     */
    public addUserForWorkspace({
        workspaceGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * The user to add to the workspace.
         */
        requestBody: {
            data?: WorkspaceAddUserRequest;
        },
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
        data?: UserBaseResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_gid}/addUser',
            path: {
                'workspace_gid': workspaceGid,
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
     * Remove a user from a workspace or organization
     * Remove a user from a workspace or organization.
     * The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
     * Returns an empty data record.
     * @returns void
     * @throws ApiError
     */
    public removeUserForWorkspace({
        workspaceGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * The user to remove from the workspace.
         */
        requestBody: {
            data?: WorkspaceRemoveUserRequest;
        },
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
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_gid}/removeUser',
            path: {
                'workspace_gid': workspaceGid,
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
