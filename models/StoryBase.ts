/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type StoryBase = (AsanaResource & {
    /**
     * The time at which this resource was created.
     */
    readonly created_at?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    readonly resource_subtype?: string;
    /**
     * The plain text of the comment to add. Cannot be used with html_text.
     */
    text?: string;
    /**
     * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator.
     */
    html_text?: string;
    /**
     * *Conditional*. Whether the story should be pinned on the resource.
     */
    is_pinned?: boolean;
    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     */
    sticker_name?: StoryBase.sticker_name;
});

export namespace StoryBase {

    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     */
    export enum sticker_name {
        GREEN_CHECKMARK = 'green_checkmark',
        PEOPLE_DANCING = 'people_dancing',
        DANCING_UNICORN = 'dancing_unicorn',
        HEART = 'heart',
        PARTY_POPPER = 'party_popper',
        PEOPLE_WAVING_FLAGS = 'people_waving_flags',
        SPLASHING_NARWHAL = 'splashing_narwhal',
        TROPHY = 'trophy',
        YETI_RIDING_UNICORN = 'yeti_riding_unicorn',
        CELEBRATING_PEOPLE = 'celebrating_people',
        DETERMINED_CLIMBERS = 'determined_climbers',
        PHOENIX_SPREADING_LOVE = 'phoenix_spreading_love',
    }


}

