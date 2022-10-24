/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventResponse } from '../models/EventResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EventsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get events on a resource
     * Returns the full record for all events that have occurred since the sync
     * token was created.
     *
     * A `GET` request to the endpoint `/[path_to_resource]/events` can be made in
     * lieu of including the resource ID in the data for the request.
     *
     * Asana limits a single sync token to 100 events. If more than 100 events exist
     * for a given resource, `has_more: true` will be returned in the response, indicating
     * that there are more events to pull.
     *
     * *Note: The resource returned will be the resource that triggered the
     * event. This may be different from the one that the events were requested
     * for. For example, a subscription to a project will contain events for
     * tasks contained within the project.*
     * @returns any Successfully retrieved events.
     * @throws ApiError
     */
    public getEvents({
        resource,
        sync,
        optPretty,
        optFields,
    }: {
        /**
         * A resource ID to subscribe to. The resource can be a task or project.
         */
        resource: string,
        /**
         * A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.
         * *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.*
         */
        sync?: string,
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
        data?: Array<EventResponse>;
        /**
         * A sync token to be used with the next call to the /events endpoint.
         */
        sync?: string;
        /**
         * Indicates whether there are more events to pull.
         */
        has_more?: boolean;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/events',
            query: {
                'resource': resource,
                'sync': sync,
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
