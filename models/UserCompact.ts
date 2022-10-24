/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';

export type UserCompact = (AsanaResource & {
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
});

