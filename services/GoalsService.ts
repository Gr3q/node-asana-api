/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { GoalCompact } from '../models/GoalCompact';
import type { GoalMetricBase } from '../models/GoalMetricBase';
import type { GoalMetricCurrentValueRequest } from '../models/GoalMetricCurrentValueRequest';
import type { GoalRequest } from '../models/GoalRequest';
import type { GoalResponse } from '../models/GoalResponse';
import type { TaskAddFollowersRequest } from '../models/TaskAddFollowersRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GoalsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @returns any Successfully retrieved the record for a single goal.
     * @throws ApiError
     */
    public getGoal({
        goalGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/goals/{goal_gid}',
            path: {
                'goal_gid': goalGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for
     * that goal. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated goal record.
     * @returns any Successfully updated the goal.
     * @throws ApiError
     */
    public updateGoal({
        goalGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
        /**
         * The updated fields for the goal.
         */
        requestBody: {
            data?: GoalRequest;
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/goals/{goal_gid}',
            path: {
                'goal_gid': goalGid,
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
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.
     *
     * Returns an empty data record.
     * @returns any Successfully deleted the specified goal.
     * @throws ApiError
     */
    public deleteGoal({
        goalGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
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
            url: '/goals/{goal_gid}',
            path: {
                'goal_gid': goalGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get goals
     * Returns compact goal records.
     * @returns any Successfully retrieved the requested goals.
     * @throws ApiError
     */
    public getGoals({
        optPretty,
        optFields,
        limit,
        offset,
        portfolio,
        project,
        isWorkspaceLevel,
        team,
        workspace,
        timePeriods,
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
         * Globally unique identifier for supporting portfolio.
         */
        portfolio?: string,
        /**
         * Globally unique identifier for supporting project.
         */
        project?: string,
        /**
         * Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
         */
        isWorkspaceLevel?: boolean,
        /**
         * Globally unique identifier for the team.
         */
        team?: string,
        /**
         * Globally unique identifier for the workspace.
         */
        workspace?: string,
        /**
         * Globally unique identifiers for the time periods.
         */
        timePeriods?: Array<string>,
    }): CancelablePromise<{
        data?: Array<GoalCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/goals',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
                'portfolio': portfolio,
                'project': project,
                'is_workspace_level': isWorkspaceLevel,
                'team': team,
                'workspace': workspace,
                'time_periods': timePeriods,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Create a goal
     * Creates a new goal in a workspace or team.
     *
     * Returns the full record of the newly created goal.
     * @returns any Successfully created a new goal.
     * @throws ApiError
     */
    public createGoal({
        requestBody,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * The goal to create.
         */
        requestBody: {
            data?: GoalRequest;
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals',
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
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @returns any Successfully created a new goal metric.
     * @throws ApiError
     */
    public createGoalMetric({
        goalGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
        /**
         * The goal metric to create.
         */
        requestBody: {
            data?: GoalMetricBase;
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals/{goal_gid}/setMetric',
            path: {
                'goal_gid': goalGid,
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
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Update a goal metric
     * Updates a goal's existing metric's `current_number_value` if one exists,
     * otherwise responds with a 400 status code.
     *
     * Returns the complete updated goal metric record.
     * @returns any Successfully updated the goal metric.
     * @throws ApiError
     */
    public updateGoalMetric({
        goalGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
        /**
         * The updated fields for the goal metric.
         */
        requestBody: {
            data?: GoalMetricCurrentValueRequest;
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals/{goal_gid}/setMetricCurrentValue',
            path: {
                'goal_gid': goalGid,
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
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to.
     * Each goal can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @returns any Successfully added users as collaborators.
     * @throws ApiError
     */
    public addFollowers({
        goalGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
        /**
         * The followers to be added as collaborators
         */
        requestBody: {
            data?: TaskAddFollowersRequest;
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals/{goal_gid}/addFollowers',
            path: {
                'goal_gid': goalGid,
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
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from.
     * Each goal can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @returns any Successfully removed users as collaborators.
     * @throws ApiError
     */
    public removeFollowers({
        goalGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
        /**
         * The followers to be removed as collaborators
         */
        requestBody: {
            data?: TaskAddFollowersRequest;
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
        data?: GoalResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals/{goal_gid}/removeFollowers',
            path: {
                'goal_gid': goalGid,
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
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @returns any Successfully retrieved the specified goal's parent goals.
     * @throws ApiError
     */
    public getParentGoalsForGoal({
        goalGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal.
         */
        goalGid: string,
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
        data?: Array<GoalCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/goals/{goal_gid}/parentGoals',
            path: {
                'goal_gid': goalGid,
            },
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            errors: {
                400: `This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.`,
                401: `A valid authentication token was not provided with the request, so the API could not associate a user with the request.`,
                402: `The request was valid, but the queried object or object mutation specified in the request is above your current premium level.`,
                403: `The authentication and request syntax was valid but the server is refusing to complete the request. This can happen if you try to read or write to objects or properties that the user does not have access to.`,
                404: `Either the request method and path supplied do not specify a known action in the API, or the object specified by the request does not exist.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
            },
        });
    }

}
