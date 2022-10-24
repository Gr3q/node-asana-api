/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A response object returned from a batch request.
 */
export type BatchResponse = {
    /**
     * The HTTP status code that the invoked endpoint returned.
     */
    status_code?: number;
    /**
     * A map of HTTP headers specific to this result. This is primarily used for returning a `Location` header to accompany a `201 Created` result.  The parent HTTP response will contain all common headers.
     */
    headers?: any;
    /**
     * The JSON body that the invoked endpoint returned.
     */
    body?: any;
};

