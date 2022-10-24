/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserCompact } from './UserCompact';

export type UserBaseResponse = (UserCompact & {
    /**
     * The user's email address.
     */
    readonly email?: string;
    /**
     * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
     */
    readonly photo?: {
        image_21x21?: string;
        image_27x27?: string;
        image_36x36?: string;
        image_60x60?: string;
        image_128x128?: string;
        image_1024x1024?: string;
    } | null;
});

