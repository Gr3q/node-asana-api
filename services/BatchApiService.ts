/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchRequest } from '../models/BatchRequest';
import type { BatchResponse } from '../models/BatchResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BatchApiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Submit parallel requests
     * Make multiple requests in parallel to Asana's API.
     * @returns any Successfully completed the requested batch API operations.
     * @throws ApiError
     */
    public createBatchRequest({
        requestBody,
        optPretty,
        optFields,
    }: {
        /**
         * The requests to batch together via the Batch API.
         */
        requestBody: {
            data?: BatchRequest;
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
        data?: Array<BatchResponse>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/batch',
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
