/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An action object for use in a batch request.
 */
export type BatchRequestAction = {
    /**
     * The path of the desired endpoint relative to the API’s base URL. Query parameters are not accepted here; put them in `data` instead.
     */
    relative_path: string;
    /**
     * The HTTP method you wish to emulate for the action.
     */
    method: BatchRequestAction.method;
    /**
     * For `GET` requests, this should be a map of query parameters you would have normally passed in the URL. Options and pagination are not accepted here; put them in `options` instead. For `POST`, `PATCH`, and `PUT` methods, this should be the content you would have normally put in the data field of the body.
     */
    data?: any;
    /**
     * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
     */
    options?: {
        /**
         * Pagination limit for the request.
         */
        limit?: number;
        /**
         * Pagination offset for the request.
         */
        offset?: number;
        /**
         * The fields to retrieve in the request.
         */
        fields?: Array<string>;
    };
};

export namespace BatchRequestAction {

    /**
     * The HTTP method you wish to emulate for the action.
     */
    export enum method {
        GET = 'get',
        POST = 'post',
        PUT = 'put',
        DELETE = 'delete',
        PATCH = 'patch',
        HEAD = 'head',
    }


}

