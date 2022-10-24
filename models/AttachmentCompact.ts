/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type AttachmentCompact = (AsanaResource & {
    /**
     * The name of the file.
     */
    readonly name?: string;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
     */
    resource_subtype?: string;
});

