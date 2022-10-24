/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AttachmentRequest = {
    /**
     * The type of the attachment. Must be one of the [given values](/docs/attachment). If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.
     *
     */
    resource_subtype?: AttachmentRequest.resource_subtype;
    /**
     * Required for `asana` attachments.
     *
     */
    file?: Blob;
    /**
     * Required identifier of the parent task, project, or project_brief, as a string.
     *
     */
    parent?: string;
    /**
     * The URL of the external resource being attached. Required for attachments of type `external`.
     *
     */
    url?: string;
    /**
     * The name of the external resource being attached. Required for attachments of type `external`.
     *
     */
    name?: string;
};

export namespace AttachmentRequest {

    /**
     * The type of the attachment. Must be one of the [given values](/docs/attachment). If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.
     *
     */
    export enum resource_subtype {
        ASANA_FILE_ATTACHMENTS = 'asana_file_attachments',
        EXTERNAL = 'external',
    }


}

