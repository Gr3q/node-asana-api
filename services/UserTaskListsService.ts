/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserTaskListCompact } from '../models/UserTaskListCompact';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserTaskListsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a user task list
     * Returns the full record for a user task list.
     * @returns any Successfully retrieved the user task list.
     * @throws ApiError
     */
    public getUserTaskList({
        userTaskListGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the user task list.
         */
        userTaskListGid: string,
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
        data?: UserTaskListCompact;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_task_lists/{user_task_list_gid}',
            path: {
                'user_task_list_gid': userTaskListGid,
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
     * Get a user's task list
     * Returns the full record for a user's task list.
     * @returns any Successfully retrieved the user's task list.
     * @throws ApiError
     */
    public getUserTaskListForUser({
        userGid,
        workspace,
        optPretty,
        optFields,
    }: {
        /**
         * A string identifying a user. This can either be the string "me", an email, or the gid of a user.
         */
        userGid: string,
        /**
         * The workspace in which to get the user task list.
         */
        workspace: string,
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
        data?: UserTaskListCompact;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{user_gid}/user_task_list',
            path: {
                'user_gid': userGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'workspace': workspace,
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

}
