/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { WebhookRequest } from '../models/WebhookRequest';
import type { WebhookResponse } from '../models/WebhookResponse';
import type { WebhookUpdateRequest } from '../models/WebhookUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebhooksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get multiple webhooks
     * Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.
     * @returns any Successfully retrieved the requested webhooks.
     * @throws ApiError
     */
    public getWebhooks({
        workspace,
        optPretty,
        optFields,
        limit,
        offset,
        resource,
    }: {
        /**
         * The workspace to query for webhooks in.
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
         * Only return webhooks for the given resource.
         */
        resource?: string,
    }): CancelablePromise<{
        data?: Array<WebhookResponse>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
                'workspace': workspace,
                'resource': resource,
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
     * Establish a webhook
     * Establishing a webhook is a two-part process. First, a simple HTTP POST
     * request initiates the creation similar to creating any other resource.
     *
     * Next, in the middle of this request comes the confirmation handshake.
     * When a webhook is created, we will send a test POST to the target with an
     * `X-Hook-Secret` header. The target must respond with a `200 OK` or `204
     * No Content` and a matching `X-Hook-Secret` header to confirm that this
     * webhook subscription is indeed expected. We strongly recommend storing
     * this secret to be used to verify future webhook event signatures.
     *
     * The POST request to create the webhook will then return with the status
     * of the request. If you do not acknowledge the webhook’s confirmation
     * handshake it will fail to setup, and you will receive an error in
     * response to your attempt to create it. This means you need to be able to
     * receive and complete the webhook *while* the POST request is in-flight
     * (in other words, have a server that can handle requests asynchronously).
     *
     * Invalid hostnames like localhost will recieve a 403 Forbidden status code.
     *
     * ```
     * # Request
     * curl -H "Authorization: Bearer <personal_access_token>" \
     * -X POST https://app.asana.com/api/1.0/webhooks \
     * -d "resource=8675309" \
     * -d "target=https://example.com/receive-webhook/7654"
     * ```
     *
     * ```
     * # Handshake sent to https://example.com/
     * POST /receive-webhook/7654
     * X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
     * ```
     *
     * ```
     * # Handshake response sent by example.com
     * HTTP/1.1 200
     * X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
     * ```
     *
     * ```
     * # Response
     * HTTP/1.1 201
     * {
         * "data": {
             * "gid": "43214",
             * "resource": {
                 * "gid": "8675309",
                 * "name": "Bugs"
                 * },
                 * "target": "https://example.com/receive-webhook/7654",
                 * "active": false,
                 * "last_success_at": null,
                 * "last_failure_at": null,
                 * "last_failure_content": null
                 * }
                 * }
                 * ```
                 * @returns any Successfully created the requested webhook.
                 * @throws ApiError
                 */
                public createWebhook({
                    requestBody,
                    optPretty,
                    optFields,
                }: {
                    /**
                     * The webhook workspace and target.
                     */
                    requestBody: {
                        data?: WebhookRequest;
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
                    data?: WebhookResponse;
                }> {
                    return this.httpRequest.request({
                        method: 'POST',
                        url: '/webhooks',
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
                 * Get a webhook
                 * Returns the full record for the given webhook.
                 * @returns any Successfully retrieved the requested webhook.
                 * @throws ApiError
                 */
                public getWebhook({
                    webhookGid,
                    optPretty,
                    optFields,
                }: {
                    /**
                     * Globally unique identifier for the webhook.
                     */
                    webhookGid: string,
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
                    data?: WebhookResponse;
                }> {
                    return this.httpRequest.request({
                        method: 'GET',
                        url: '/webhooks/{webhook_gid}',
                        path: {
                            'webhook_gid': webhookGid,
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
                 * Update a webhook
                 * An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.
                 * @returns any Successfully updated the webhook.
                 * @throws ApiError
                 */
                public updateWebhook({
                    webhookGid,
                    requestBody,
                    optPretty,
                    optFields,
                }: {
                    /**
                     * Globally unique identifier for the webhook.
                     */
                    webhookGid: string,
                    /**
                     * The updated filters for the webhook.
                     */
                    requestBody: {
                        data?: WebhookUpdateRequest;
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
                    data?: WebhookResponse;
                }> {
                    return this.httpRequest.request({
                        method: 'PUT',
                        url: '/webhooks/{webhook_gid}',
                        path: {
                            'webhook_gid': webhookGid,
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
                 * Delete a webhook
                 * This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.
                 * @returns any Successfully retrieved the requested webhook.
                 * @throws ApiError
                 */
                public deleteWebhook({
                    webhookGid,
                    optPretty,
                    optFields,
                }: {
                    /**
                     * Globally unique identifier for the webhook.
                     */
                    webhookGid: string,
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
                        url: '/webhooks/{webhook_gid}',
                        path: {
                            'webhook_gid': webhookGid,
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

            }
