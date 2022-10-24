/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsanaNamedResource } from '../models/AsanaNamedResource';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TypeaheadService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get objects via typeahead
     * Retrieves objects in the workspace based via an auto-completion/typeahead
     * search algorithm. This feature is meant to provide results quickly, so do
     * not rely on this API to provide extremely accurate search results. The
     * result set is limited to a single page of results with a maximum size, so
     * you won’t be able to fetch large numbers of results.
     *
     * The typeahead search API provides search for objects from a single
     * workspace. This endpoint should be used to query for objects when
     * creating an auto-completion/typeahead search feature. This API is meant
     * to provide results quickly and should not be relied upon for accurate or
     * exhaustive search results. The results sets are limited in size and
     * cannot be paginated.
     *
     * Queries return a compact representation of each object which is typically
     * the gid and name fields. Interested in a specific set of fields or all of
     * the fields?! Of course you are. Use field selectors to manipulate what
     * data is included in a response.
     *
     * Resources with type `user` are returned in order of most contacted to
     * least contacted. This is determined by task assignments, adding the user
     * to projects, and adding the user as a follower to tasks, messages,
     * etc.
     *
     * Resources with type `project` are returned in order of recency. This is
     * determined when the user visits the project, is added to the project, and
     * completes tasks in the project.
     *
     * Resources with type `task` are returned with priority placed on tasks
     * the user is following, but no guarantee on the order of those tasks.
     *
     * Resources with type `project_template` are returned with priority
     * placed on favorited project templates.
     *
     * Leaving the `query` string empty or omitted will give you results, still
     * following the resource ordering above. This could be used to list users or
     * projects that are relevant for the requesting user's api token.
     * @returns any Successfully retrieved objects via a typeahead search algorithm.
     * @throws ApiError
     */
    public typeaheadForWorkspace({
        workspaceGid,
        resourceType = 'user',
        type = 'user',
        query,
        count,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `project`, `project_template`, `portfolio`, `tag`, `task`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported.
         */
        resourceType?: 'custom_field' | 'project' | 'project_template' | 'portfolio' | 'tag' | 'task' | 'user',
        /**
         * *Deprecated: new integrations should prefer the resource_type field.*
         */
        type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user',
        /**
         * The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.
         */
        query?: string,
        /**
         * The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.
         */
        count?: number,
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
        data?: Array<AsanaNamedResource>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_gid}/typeahead',
            path: {
                'workspace_gid': workspaceGid,
            },
            query: {
                'resource_type': resourceType,
                'type': type,
                'query': query,
                'count': count,
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

}
