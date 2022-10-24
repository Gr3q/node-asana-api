/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { ProjectBriefRequest } from '../models/ProjectBriefRequest';
import type { ProjectBriefResponse } from '../models/ProjectBriefResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectBriefsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a project brief
     * Get the full record for a project brief.
     * @returns any Successfully retrieved the record for a project brief.
     * @throws ApiError
     */
    public getProjectBrief({
        projectBriefGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the project brief.
         */
        projectBriefGid: string,
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
        data?: ProjectBriefResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project_briefs/{project_brief_gid}',
            path: {
                'project_brief_gid': projectBriefGid,
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
                424: `You have exceeded one of the enforced rate limits in the API. See the [documentation on rate limiting](https://developers.asana.com/docs/#rate-limits) for more information.`,
                500: `There was a problem on Asana’s end. In the event of a server error the response body should contain an error phrase. These phrases can be used by Asana support to quickly look up the incident that caused the server error. Some errors are due to server load, and will not supply an error phrase.`,
                501: `There is an issue between the load balancers and Asana's API.`,
                503: `Either the upstream service is unavailable to the API, or the API has been intentionally shut off.`,
                504: `This request took too long to complete.`,
            },
        });
    }

    /**
     * Update a project brief
     * An existing project brief can be updated by making a PUT request on the URL for
     * that project brief. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated project brief record.
     * @returns any Successfully updated the project brief.
     * @throws ApiError
     */
    public updateProjectBrief({
        projectBriefGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the project brief.
         */
        projectBriefGid: string,
        /**
         * The updated fields for the project brief.
         */
        requestBody: {
            data?: ProjectBriefRequest;
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
        data?: ProjectBriefResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project_briefs/{project_brief_gid}',
            path: {
                'project_brief_gid': projectBriefGid,
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
     * Delete a project brief
     * Deletes a specific, existing project brief.
     *
     * Returns an empty data record.
     * @returns any Successfully deleted the specified project brief.
     * @throws ApiError
     */
    public deleteProjectBrief({
        projectBriefGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the project brief.
         */
        projectBriefGid: string,
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
            url: '/project_briefs/{project_brief_gid}',
            path: {
                'project_brief_gid': projectBriefGid,
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
     * Create a project brief
     * Creates a new project brief.
     *
     * Returns the full record of the newly created project brief.
     * @returns any Successfully created a new project brief.
     * @throws ApiError
     */
    public createProjectBrief({
        projectGid,
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the project.
         */
        projectGid: string,
        /**
         * The project brief to create.
         */
        requestBody: {
            data?: ProjectBriefRequest;
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
        data?: ProjectBriefResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_gid}/project_briefs',
            path: {
                'project_gid': projectGid,
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

}
