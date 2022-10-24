/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldCompact } from './CustomFieldCompact';
import type { EnumOption } from './EnumOption';
import type { Like } from './Like';
import type { Preview } from './Preview';
import type { ProjectCompact } from './ProjectCompact';
import type { SectionCompact } from './SectionCompact';
import type { StoryBase } from './StoryBase';
import type { StoryCompact } from './StoryCompact';
import type { StoryResponseDates } from './StoryResponseDates';
import type { TagCompact } from './TagCompact';
import type { TaskCompact } from './TaskCompact';
import type { UserCompact } from './UserCompact';

export type StoryResponse = (StoryBase & {
    created_by?: UserCompact;
    readonly type?: StoryResponse.type;
    /**
     * *Conditional*. Whether the text of the story can be edited after creation.
     */
    readonly is_editable?: boolean;
    /**
     * *Conditional*. Whether the text of the story has been edited after creation.
     */
    readonly is_edited?: boolean;
    /**
     * *Deprecated - please use likes instead*
     * *Conditional*. True if the story is hearted by the authorized user, false if not.
     */
    readonly hearted?: boolean;
    /**
     * *Deprecated - please use likes instead*
     *
     * *Conditional*. Array of likes for users who have hearted this story.
     */
    readonly hearts?: Array<Like>;
    /**
     * *Deprecated - please use likes instead*
     *
     * *Conditional*. The number of users who have hearted this story.
     */
    readonly num_hearts?: number;
    /**
     * *Conditional*. True if the story is liked by the authorized user, false if not.
     */
    readonly liked?: boolean;
    /**
     * *Conditional*. Array of likes for users who have liked this story.
     */
    readonly likes?: Array<Like>;
    /**
     * *Conditional*. The number of users who have liked this story.
     */
    readonly num_likes?: number;
    /**
     * *Conditional*. A collection of previews to be displayed in the story.
     *
     * *Note: This property only exists for comment stories.*
     */
    readonly previews?: Array<Preview>;
    /**
     * *Conditional*'
     */
    old_name?: string;
    /**
     * *Conditional*
     */
    readonly new_name?: string;
    old_dates?: StoryResponseDates;
    new_dates?: StoryResponseDates;
    /**
     * *Conditional*
     */
    readonly old_resource_subtype?: string;
    /**
     * *Conditional*
     */
    readonly new_resource_subtype?: string;
    /**
     * *Conditional*
     */
    readonly story?: StoryCompact;
    /**
     * *Conditional*
     */
    readonly assignee?: UserCompact;
    /**
     * *Conditional*
     */
    readonly follower?: UserCompact;
    /**
     * *Conditional*
     */
    readonly old_section?: SectionCompact;
    /**
     * *Conditional*
     */
    readonly new_section?: SectionCompact;
    /**
     * *Conditional*
     */
    readonly task?: TaskCompact;
    /**
     * *Conditional*
     */
    readonly project?: ProjectCompact;
    /**
     * *Conditional*
     */
    readonly tag?: TagCompact;
    /**
     * *Conditional*
     */
    readonly custom_field?: CustomFieldCompact;
    /**
     * *Conditional*
     */
    readonly old_text_value?: string;
    /**
     * *Conditional*
     */
    readonly new_text_value?: string;
    /**
     * *Conditional*
     */
    readonly old_number_value?: number;
    /**
     * *Conditional*
     */
    readonly new_number_value?: number;
    /**
     * *Conditional*
     */
    readonly old_enum_value?: EnumOption;
    /**
     * *Conditional*
     */
    readonly new_enum_value?: EnumOption;
    /**
     * *Conditional*
     */
    readonly old_multi_enum_values?: Array<EnumOption>;
    /**
     * *Conditional*
     */
    readonly new_multi_enum_values?: Array<EnumOption>;
    /**
     * *Conditional*
     */
    readonly new_approval_status?: string;
    /**
     * *Conditional*
     */
    readonly old_approval_status?: string;
    /**
     * *Conditional*
     */
    readonly duplicate_of?: TaskCompact;
    /**
     * *Conditional*
     */
    readonly duplicated_from?: TaskCompact;
    /**
     * *Conditional*
     */
    readonly dependency?: TaskCompact;
    /**
     * The component of the Asana product the user used to trigger the story.
     */
    readonly source?: StoryResponse.source;
    target?: TaskCompact;
});

export namespace StoryResponse {

    export enum type {
        COMMENT = 'comment',
        SYSTEM = 'system',
    }

    /**
     * The component of the Asana product the user used to trigger the story.
     */
    export enum source {
        WEB = 'web',
        EMAIL = 'email',
        MOBILE = 'mobile',
        API = 'api',
        UNKNOWN = 'unknown',
    }


}

