/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsanaResource } from './AsanaResource';
import type { PortfolioCompact } from './PortfolioCompact';
import type { UserCompact } from './UserCompact';

export type PortfolioMembershipCompact = (AsanaResource & {
    /**
     * [Opt In](/docs/input-output-options). The portfolio the user is a member of.
     */
    portfolio?: PortfolioCompact;
    user?: UserCompact;
});

