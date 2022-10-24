/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagCompact } from './TagCompact';

export type TagBase = (TagCompact & {
    /**
     * Color of the tag.
     */
    color?: TagBase.color | null;
    /**
     * Free-form textual information associated with the tag (i.e. its description).
     */
    notes?: string;
});

export namespace TagBase {

    /**
     * Color of the tag.
     */
    export enum color {
        DARK_PINK = 'dark-pink',
        DARK_GREEN = 'dark-green',
        DARK_BLUE = 'dark-blue',
        DARK_RED = 'dark-red',
        DARK_TEAL = 'dark-teal',
        DARK_BROWN = 'dark-brown',
        DARK_ORANGE = 'dark-orange',
        DARK_PURPLE = 'dark-purple',
        DARK_WARM_GRAY = 'dark-warm-gray',
        LIGHT_PINK = 'light-pink',
        LIGHT_GREEN = 'light-green',
        LIGHT_BLUE = 'light-blue',
        LIGHT_RED = 'light-red',
        LIGHT_TEAL = 'light-teal',
        LIGHT_BROWN = 'light-brown',
        LIGHT_ORANGE = 'light-orange',
        LIGHT_PURPLE = 'light-purple',
        LIGHT_WARM_GRAY = 'light-warm-gray',
    }


}

