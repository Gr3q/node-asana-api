/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentCompact } from './AttachmentCompact';
import type { TaskCompact } from './TaskCompact';

export type AttachmentResponse = (AttachmentCompact & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * The URL containing the content of the attachment.
     * *Note:* May be null if the attachment is hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.
     */
    readonly download_url?: string | null;
    readonly permanent_url?: string | null;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and `vimeo`.
     */
    readonly host?: string;
    parent?: (TaskCompact & {
        /**
         * The resource subtype of the parent resource that the filter applies to.
         */
        resource_subtype?: string | null;
    });
    /**
     * The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`.
     */
    readonly size?: number;
    /**
     * The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.
     */
    readonly view_url?: string | null;
});

