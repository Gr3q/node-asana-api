/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentCompact } from '../models/AttachmentCompact';
import type { AttachmentRequest } from '../models/AttachmentRequest';
import type { AttachmentResponse } from '../models/AttachmentResponse';
import type { EmptyResponse } from '../models/EmptyResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AttachmentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get an attachment
     * Get the full record for a single attachment.
     * @returns any Successfully retrieved the record for a single attachment.
     * @throws ApiError
     */
    public getAttachment({
        attachmentGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the attachment.
         */
        attachmentGid: string,
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
        data?: AttachmentResponse;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attachments/{attachment_gid}',
            path: {
                'attachment_gid': attachmentGid,
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
     * Delete an attachment
     * Deletes a specific, existing attachment.
     *
     * Returns an empty data record.
     * @returns any Successfully deleted the specified attachment.
     * @throws ApiError
     */
    public deleteAttachment({
        attachmentGid,
        optPretty,
        optFields,
    }: {
        /**
         * Globally unique identifier for the attachment.
         */
        attachmentGid: string,
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
            url: '/attachments/{attachment_gid}',
            path: {
                'attachment_gid': attachmentGid,
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
     * Get attachments from an object
     * Returns the compact records for all attachments on the object.
     *
     * There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.
     * @returns any Successfully retrieved the specified object's attachments.
     * @throws ApiError
     */
    public getAttachmentsForObject({
        parent,
        optPretty,
        optFields,
        limit,
        offset,
    }: {
        /**
         * Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`.
         */
        parent: string,
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
    }): CancelablePromise<{
        data?: Array<AttachmentCompact>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attachments',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
                'limit': limit,
                'offset': offset,
                'parent': parent,
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
     * Upload an attachment
     * Upload an attachment.
     *
     * This method uploads an attachment on an object and returns the compact
     * record for the created attachment object. This is possible by either:
     *
     * - Providing the URL of the external resource being attached, or
     * - Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
     * files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API
     *
     * The 100MB size limit on attachments in Asana is enforced on this endpoint.
     *
     * This endpoint expects a multipart/form-data encoded request containing
     * the full contents of the file to be uploaded.
     *
     * Requests made should follow the HTTP/1.1 specification that line
     * terminators are of the form `CRLF` or `\r\n` outlined
     * [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules)
     * in order for the server to reliably and properly handle the request.
     * @returns any Successfully uploaded the attachment to the parent object.
     * @throws ApiError
     */
    public createAttachmentForObject({
        formData,
        optPretty,
        optFields,
    }: {
        /**
         * The file you want to upload.
         *
         * *Note when using curl:*
         *
         * Be sure to add an `‘@’` before the file path, and use the `--form`
         * option instead of the `-d` option.
         *
         * When uploading PDFs with curl, force the content-type to be pdf by
         * appending the content type to the file path: `--form
         * "file=@file.pdf;type=application/pdf"`.
         */
        formData: AttachmentRequest,
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
        data?: AttachmentResponse;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/attachments',
            query: {
                'opt_pretty': optPretty,
                'opt_fields': optFields,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
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
