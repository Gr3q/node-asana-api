/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { UserCompact } from './UserCompact';

export type StoryCompact = (AsanaResource & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    created_by?: UserCompact;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    readonly resource_subtype?: string;
    /**
     * *Create-only*. Human-readable text for the story or comment.
     * This will not include the name of the creator.
     * *Note: This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may not always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request.*
     * Use the `resource_subtype` property to discover the action that created the story.
     */
    text?: string;
});

