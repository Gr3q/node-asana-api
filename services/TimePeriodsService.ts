/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimePeriodCompact } from '../models/TimePeriodCompact';
import type { TimePeriodResponse } from '../models/TimePeriodResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TimePeriodsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a time period
     * Returns the full record for a single time period.
     * @returns any Successfully retrieved the record for a single time period.
     * @throws ApiError
     */
    public getTimePeriod({
        timePeriodGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the time period.
         */
        timePeriodGid: string,
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
        data?: TimePeriodResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/time_periods/{time_period_gid}',
            path: {
                'time_period_gid': timePeriodGid,
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
     * Get time periods
     * Returns compact time period records.
     * @returns any Successfully retrieved the requested time periods.
     * @throws ApiError
     */
    public getTimePeriods({
        workspace,
        optPretty,
        optFields,
        limit,
        offset,
        startOn,
        endOn,
    }: {
        /**
         * Globally unique identifier for the workspace.
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
         * ISO 8601 date string
         */
        startOn?: string,
        /**
         * ISO 8601 date string
         */
        endOn?: string,
    }): CancelablePromise<{
        data?: Array<TimePeriodCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/time_periods',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
                'start_on': startOn,
                'end_on': endOn,
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
