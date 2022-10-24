/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogEvent } from '../models/AuditLogEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuditLogApiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get audit log events
     * Retrieve the audit log events that have been captured in your domain.
     *
     * This endpoint will return a list of [AuditLogEvent](/docs/audit-log-event) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.
     *
     * There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/docs/audit-log-event) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.
     *
     * The list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.
     *
     * When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/docs/audit-log-event) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
     * @returns any AuditLogEvents were successfully retrieved.
     * @throws ApiError
     */
    public getAuditLogEvents({
        workspaceGid,
        startAt,
        endAt,
        eventType,
        actorType,
        actorGid,
        resourceGid,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for the workspace or organization.
         */
        workspaceGid: string,
        /**
         * Filter to events created after this time (inclusive).
         */
        startAt?: string,
        /**
         * Filter to events created before this time (exclusive).
         */
        endAt?: string,
        /**
         * Filter to events of this type.
         * Refer to the [Supported AuditLogEvents](/docs/supported-auditlogevents) for a full list of values.
         */
        eventType?: string,
        /**
         * Filter to events with an actor of this type.
         * This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.
         */
        actorType?: 'user' | 'asana' | 'asana_support' | 'anonymous' | 'external_administrator',
        /**
         * Filter to events triggered by the actor with this ID.
         */
        actorGid?: string,
        /**
         * Filter to events with this resource ID.
         */
        resourceGid?: string,
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
        data?: Array<AuditLogEvent>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_gid}/audit_log_events',
            path: {
                'workspace_gid': workspaceGid,
            },
            query: {
                'start_at': startAt,
                'end_at': endAt,
                'event_type': eventType,
                'actor_type': actorType,
                'actor_gid': actorGid,
                'resource_gid': resourceGid,
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

}
