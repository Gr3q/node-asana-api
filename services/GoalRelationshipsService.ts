/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { GoalAddSupportingRelationshipRequest } from '../models/GoalAddSupportingRelationshipRequest';
import type { GoalRelationshipCompact } from '../models/GoalRelationshipCompact';
import type { GoalRelationshipRequest } from '../models/GoalRelationshipRequest';
import type { GoalRelationshipResponse } from '../models/GoalRelationshipResponse';
import type { GoalRemoveSupportingRelationshipRequest } from '../models/GoalRemoveSupportingRelationshipRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GoalRelationshipsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a goal relationship
     * Returns the complete updated goal relationship record for a single goal relationship.
     * @returns any Successfully retrieved the record for the goal relationship.
     * @throws ApiError
     */
    public getGoalRelationship({
        goalRelationshipGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal relationship.
         */
        goalRelationshipGid: string,
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
        data?: GoalRelationshipResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/goal_relationships/{goal_relationship_gid}',
            path: {
                'goal_relationship_gid': goalRelationshipGid,
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
     * Update a goal relationship
     * An existing goal relationship can be updated by making a PUT request on the URL for
     * that goal relationship. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated goal relationship record.
     * @returns any Successfully updated the goal relationship.
     * @throws ApiError
     */
    public updateGoalRelationship({
        goalRelationshipGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the goal relationship.
         */
        goalRelationshipGid: string,
        /**
         * The updated fields for the goal relationship.
         */
        requestBody: {
            data?: GoalRelationshipRequest;
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
        data?: GoalRelationshipResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/goal_relationships/{goal_relationship_gid}',
            path: {
                'goal_relationship_gid': goalRelationshipGid,
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
     * Get goal relationships
     * Returns compact goal relationship records.
     * @returns any Successfully retrieved the requested goal relationships.
     * @throws ApiError
     */
    public getGoalRelationships({
        supportedGoal,
        optPretty,
        optFields,
        resourceSubtype,
    }: {
        /**
         * Globally unique identifier for the supported goal in the goal relationship.
         */
        supportedGoal: string,
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
         * If provided, filter to goal relationships with a given resource_subtype.
         */
        resourceSubtype?: string,
    }): CancelablePromise<{
        data?: Array<GoalRelationshipCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/goal_relationships',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'supported_goal': supportedGoal,
                'resource_subtype': resourceSubtype,
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
     * Add a supporting goal relationship
     * Creates a goal relationship by adding a supporting resource to a given goal.
     *
     * Returns the newly created goal relationship record.
     * @returns any Successfully created the goal relationship.
     * @throws ApiError
     */
    public addSupportingRelationship({
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
         * The supporting resource to be added to the goal
         */
        requestBody: {
            data?: GoalAddSupportingRelationshipRequest;
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
        data?: GoalRelationshipResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals/{goal_gid}/addSupportingRelationship',
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
     * Removes a supporting goal relationship
     * Removes a goal relationship for a given parent goal.
     * @returns any Successfully removed the goal relationship.
     * @throws ApiError
     */
    public removeSupportingRelationship({
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
         * The supporting resource to be removed from the goal
         */
        requestBody: {
            data?: GoalRemoveSupportingRelationshipRequest;
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
        data?: EmptyResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/goals/{goal_gid}/removeSupportingRelationship',
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

}
