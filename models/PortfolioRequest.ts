/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortfolioBase } from './PortfolioBase';

export type PortfolioRequest = (PortfolioBase & {
    /**
     * An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.
     */
    readonly members?: Array<string>;
    /**
     * Gid of an object.
     */
    workspace?: string;
    /**
     * True if the portfolio is public to its workspace members.
     */
    public?: boolean;
});

